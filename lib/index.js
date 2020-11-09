import fs from 'fs';
// ES TODO LO LO RELACIONADO CON ARCHIVOS 
import path from 'path';
// PROPORCIONA UNA FORMA DE TRABAJAR CON LOS DIRECTORIOS 
const { JSDOM } = jsdom;
import jsdom from 'jsdom';

// VALIDA LA RUTA - RETORNA TRUE/FALSE
// Devuelve verdadero si la ruta existe, falso en caso contrario.
export const exists = (archivo) => (fs.existsSync(archivo));
console.log(exists);

// VERIFICA SI LA RUTA ES ABSOLUTA - RETORNA TRUE/FALSE
 export const verificateAbsolute = (verifica) => path.isAbsolute(verifica) ? verifica : path.resolve(verifica);

 
//  VERIFICA SI ES UN ARCHIVO O UN DIRECTORIO - RETORNA ARRAY CON RUTAS 
export const archivosDirectorios = (pathTomado) => {
	const rutasDeEstadicticas = fs.statSync(pathTomado);
	const EsArchivo = rutasDeEstadicticas.isFile();
	// Devuelve verdadero si el objeto describe un archivo normal
	let todosLosArchivos = [];
	if (EsArchivo) {
		todosLosArchivos.push(pathTomado);
	} else {
		//Lee el directorio
		const leerDirectorio = fs.readdirSync(pathTomado);
		// Aqui obtengo la ruta absoluta de cada archivo y/o directorio mediante path join, uniendo la ruta
		// de la carpeta donde estan todos mis archivos + el elemento que se esta verificando (nombreDelArchivo)
		// porque cada elemento representa un archivo de la carpeta :)
		const arrayDePath = leerDirectorio.map((nombreDelArchivo) => {
			const paths = path.join(pathTomado, nombreDelArchivo);
			return paths;
		})
		arrayDePath.forEach((file) => {
			const solamentePaths = archivosDirectorios(file);
			todosLosArchivos = todosLosArchivos.concat(solamentePaths);
		})
	}
	return todosLosArchivos;
}

// EXTRAER ARCHIVOS CON EXTENSION .MD // RETORNA ARRAY
 export const extraerMD = (archivos) => new Promise((resolve, reject) => {
	let todoLosArchivos = [];
	archivos.forEach((archivos) => {
		const extensionPath = path.extname(archivos); //Extrae la extension
		 if (extensionPath === '.md')  todoLosArchivos.push(archivos); //Si cumple introduce dentro de la ruta
	})
	resolve(todoLosArchivos);
	reject('No se encontraron archivos con extensión .md');
})

//BUSCA LAS URL EN EL ARCHIVO .MD Y LAS GUARDA EN UN ARRAY

export const findLinks = (archivomd) => {
	const todoLosURL = [];
	archivomd.forEach((archivadormd) => {

		const readArchive = fs.readFileSync(archivadormd, "utf8");
		// obtiene los archivos de MD.
		// convertimos el archivo markdown a HTML con el marked y con el JSDOM lo estoy habriendo para usarlo
		const convertirHTML = new JSDOM(marked(readArchive));
		const ElementosDeAnclaje = convertirHTML.window.document.querySelectorAll('a');
		ElementosDeAnclaje.forEach((link) => {
			todoLosURL.push({
				href: link.href,
				text: (link.textContent).slice(0, 50),
				link: archivadormd,
			})
		});
	})
	return todoLosURL
};