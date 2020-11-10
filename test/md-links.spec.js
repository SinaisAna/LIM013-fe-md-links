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
