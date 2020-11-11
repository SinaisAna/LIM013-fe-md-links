/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

import * as funcionesMdLinks from '../lib/index.js';

describe('Recibe, Verifica y convierte la ruta',() => {
  it('Tiene que retortar true para saber que es valida', () => {
expect(funcionesMdLinks.exists("C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/lib")).toBe(true);
  })

  it('Tiene que retornar true para saber que es absoluta', () => {
		expect(funcionesMdLinks.verificateAbsolute("lib/index.js")).toBe('C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\lib\\index.js');
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

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(funcionesMdLinks.archivosDirectorios('test/archivo_prueba/archivo_prueba2/archivo_prueba3/ultimo_archivo')).toStrictEqual(
			["test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\ultimo_archivo\\archivo6.md"]);
	});
})
