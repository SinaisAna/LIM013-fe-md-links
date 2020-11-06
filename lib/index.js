import fs from 'fs';
// ES TODO LO LO RELACIONADO CON ARCHIVOS 
import path from 'path';
// PROPORCIONA UNA FORMA DE TRABAJAR CON LOS DIRECTORIOS 

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