import fs from 'fs';
import path from 'path';
import jsdom from 'jsdom';
import marked from 'marked';
import chalk from 'chalk';

// eslint-disable-next-line no-use-before-define
const { JSDOM } = jsdom;

// VALIDA LA RUTA - RETORNA TRUE/FALSE
export const exists = (archivo) => (fs.existsSync(archivo));

// VERIFICA SI LA RUTA ES ABSOLUTA - RETORNA TRUE/FALSE
// eslint-disable-next-line max-len
export const verificateAbsolute = (verifica) => (path.isAbsolute(verifica) ? verifica : path.resolve(verifica));

//  VERIFICA SI ES UN ARCHIVO O UN DIRECTORIO - RETORNA ARRAY CON RUTAS
export const archivosDirectorios = (pathTomado) => {
  const rutasDeEstadicticas = fs.statSync(pathTomado);
  const EsArchivo = rutasDeEstadicticas.isFile();
  // Devuelve verdadero si el objeto describe un archivo normal
  let todosLosArchivos = [];
  if (EsArchivo) {
    todosLosArchivos.push(pathTomado);
  } else {
    // Lee el directorio
    const leerDirectorio = fs.readdirSync(pathTomado);
    // eslint-disable-next-line max-len
    // Aqui obtengo la ruta absoluta de cada archivo y/o directorio mediante path join, uniendo la ruta
    // eslint-disable-next-line max-len
    // de la carpeta donde estan todos mis archivos + el elemento que se esta verificando (nombreDelArchivo)
    // porque cada elemento representa un archivo de la carpeta :)
    const arrayDePath = leerDirectorio.map((nombreDelArchivo) => {
      const paths = path.join(pathTomado, nombreDelArchivo);
      return paths;
    });
    arrayDePath.forEach((file) => {
      const solamentePaths = archivosDirectorios(file);
      todosLosArchivos = todosLosArchivos.concat(solamentePaths);
    });
  }
  return todosLosArchivos;
};

// EXTRAER ARCHIVOS CON EXTENSION .MD // RETORNA ARRAY
export const extraerMD = (archivos) => new Promise((resolve, reject) => {
  const todoLosArchivos = [];
  archivos.forEach((carpeta) => {
    const extensionPath = path.extname(carpeta); // Extrae la extension del archivo
    if (extensionPath === '.md') todoLosArchivos.push(carpeta); // Si cumple introduce dentro de la ruta
  });
  // crear si exites archivos crear condición
  if (todoLosArchivos.length > 0) {
    resolve(todoLosArchivos);
  } else {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject(`${chalk.bgRedBright('FAIL:') + chalk.red(' x')}No existen archivos MD`);
  }
});

// BUSCA LAS URL EN EL ARCHIVO .MD Y LAS GUARDA EN UN ARRAY
export const findLinks = (archivomd) => {
  const todoLosURL = [];
  archivomd.forEach((archivadormd) => {
    const readArchive = fs.readFileSync(archivadormd, 'utf8');
    // obtiene los archivos de MD.
    // eslint-disable-next-line max-len
    // convertimos el archivo markdown a HTML con el marked y con el JSDOM lo estoy habriendo para usarlo
    // eslint-disable-next-line no-undef
    const convertirHTML = new JSDOM(marked(readArchive));
    const ElementosDeAnclaje = convertirHTML.window.document.querySelectorAll('a');
    ElementosDeAnclaje.forEach((link) => {
      todoLosURL.push({
        href: link.href,
        text: (link.textContent).slice(0, 50),
        link: archivadormd,
      });
    });
  });
  return todoLosURL;
};
