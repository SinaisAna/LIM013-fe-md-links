import chalk from 'chalk';
import { exists, verificateAbsolute, archivosDirectorios, extraerMD, findLinks } from './index.js';
import { validarLinks } from './validate.js';

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    const pathAbsoluta = verificateAbsolute(path);
    if(exists(path) == true && options){
  

      extraerMD(archivosDirectorios(pathAbsoluta))
      .then((archivo) => validarLinks(findLinks(archivo)))
      .then((arrobj) => resolve(arrobj));

    }else if (exists(path) == true && !options) {

      extraerMD(archivosDirectorios(pathAbsoluta))
      .then((archivo) => resolve(findLinks(archivo)));
    }else{
      reject(chalk.bgRedBright('FAIL:') + chalk.red(' x') + 'No es una ruta valida');
    }
  })
}
mdLinks("C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo4.md", { validate : true })
