/* eslint-disable no-undef */
import {promesaFetch, validarLinks } from '../lib/validate.js';
import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';

fetchMock
.mock('https://www.facebook.com', 404)
.mock('https://nodejs.org/api/path.html', 200)
.mock('https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/?ref=lbp', 500)


describe('Funciones para validar ruta de validate.js', () => {
	it('Tiene que retornar un array de objetos', () => {
		validarLinks([
			{
				href: 'https://nodejs.org/api/path.html',
				text: 'https://nodejs.org/api/path.html',
				link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo1.md'
			},
			{
				href: 'https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/?ref=lbp',
				text: 'https://www.geeksforgeeks.org/node-js-fs-readfiles',
				link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo1.md'
			}
        ])
        .then((b) => expect(b).toEqual([
            {
                href: 'https://nodejs.org/api/path.html',
                text: 'https://nodejs.org/api/path.html',
                link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo1.md',
                status: 200,
                statusText: 'OK'
            },
            {
                href: 'https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/?ref=lbp',
                text: 'https://www.geeksforgeeks.org/node-js-fs-readfiles',
                link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo1.md',
                status: 500,
                statusText: "Internal Server Error"
            }
        ]))

})

it('Tiene que retornar un objeto', () => {
    return expect(promesaFetch({ href: 'https://www.facebook.com' })).resolves
        .toEqual({ href: 'https://www.facebook.com', status: 404, statusText: 'Not Found' });
    })
})