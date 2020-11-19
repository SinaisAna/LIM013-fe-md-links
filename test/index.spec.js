/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
import chalk from 'chalk';

import * as funcionesMdLinks from '../lib/index.js';

describe('Recibe, Verifica y convierte la ruta', () => {
	it('Tiene que retortar true para saber que es valida', () => {
		expect(funcionesMdLinks.exists("C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/lib")).toBe(true);
	})


	it('Tiene que retornar true para saber que es absoluta', () => {
		expect(funcionesMdLinks.verificateAbsolute("C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/lib")).toBe('C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/lib');
	})
})

describe('Archivo o directorio, extrae .md, busca links', () => {

	it('Tiene que retornar un array con solo los archivos .md', () => {
		return expect(funcionesMdLinks.extraerMD(['C:/Users/Esau Ocrospoma/Desktop/md_links/LIM013-fe-md-links/test/archivo_prueba/archivo_prueba2/archivo_prueba3/archivo5.md'])).resolves
			.toEqual(['C:/Users/Esau Ocrospoma/Desktop/md_links/LIM013-fe-md-links/test/archivo_prueba/archivo_prueba2/archivo_prueba3/archivo5.md'])

	})
	it('Tiene que devolver un error .md', () => {
		return expect(funcionesMdLinks.extraerMD(['C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/test/archivo_prueba/archivo_prueba2/archivo_prueba3/ultimo_archivo/ultimo_archivo_sin_extencion/sin_md-text'])).rejects
			.toEqual(chalk.bgRedBright('FAIL:') + chalk.red(' x') + 'No existen archivos MD');

	})

	it('Tiene que retornar un array con objetos que contengan info de las URL', () => {
		expect(funcionesMdLinks.findLinks(['C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/test/archivo_prueba/archivo_prueba2/archivo3.md'])).toStrictEqual([
			{
				href: "https://babeljs.io/docs/en/babel-node.html",
				text: '@ babel / node',
				link: 'C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/test/archivo_prueba/archivo_prueba2/archivo3.md'
			}
		]);
	})

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(funcionesMdLinks.archivosDirectorios('C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/test/archivo_prueba/archivo1.md')).toStrictEqual(['C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/test/archivo_prueba/archivo1.md']);
	});

})
