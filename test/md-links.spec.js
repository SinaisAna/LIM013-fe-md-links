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
		expect(f_mdlinks.findLinks(['C:/Users/Esau Ocrospoma/Desktop/md-links/LIM013-fe-md-links/test/archivo_prueba1/archivo_prueba2/archivo3.md'])).toStrictEqual([
			{
				href: "https://developers.google.com/v8/",
				text: 'motor de JavaScript V8 de Chrome',
				link: 'C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_test/archivesmd/archive2.md'
			}
		]);
	})

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(f_mdlinks.archiveOrDirectory('C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_test/archive1.md')).toStrictEqual(['C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_test/archive1.md']);
	});

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(f_mdlinks.archiveOrDirectory('tests/archives_test/archivesmd/multiple/last')).toStrictEqual(
			["tests\\archives_test\\archivesmd\\multiple\\last\\archive9.md"]);
	});
})
