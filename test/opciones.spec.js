/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
// import chalk from 'chalk';
// import * as funcionesopcion from '../cli/cli-opciones.js';
import { stats } from '../cli/cli-opciones.js';
/* const arrObjValidated = [
  {
    file: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\archivo7.md',
    href: 'https://www.google.com/sa+de+diagrama+de+flujo&oq=simbologia+de+diagra&aqs=chrome.0.0j69i57j0l6.9311j0j7&sourceid=chro-sssssdc8',
    text: 'this link works',
    status: 200,
    ok: 'OK',
  },
  {
    file: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\ultimo_archivo\\ultimo_archivo_sin_extencion\\sin_md-text',
    href: 'http://www.iamalinkthatfails.com',
    text: 'this link fails',
    status: 404,
    ok: 'Not Found',
  },
  {
    file: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\ultimo_archivo\\ultimo_archivo_sin_extencion\\sin_md-text',
    href: 'iamalinkthatdoesnot',
    text: 'this link does not exist',
    status: 'error',
    ok: 'link does not exist',
  },
];
*/

const inputStats = [
  {
    href: 'https://nodejs.org/es/about/',
  },
  {
    href: 'https://nodejs.org/api/fs.html',

  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',

  },

]
const statsExit = `
  Total = 3
  Unique = 3
  `;

describe('stats', () => {
  it('debe retornar una función', () => {
    expect(typeof stats).toBe('function');
  })
  it('deberia retornar el total de links únicos', () => {
    return expect(stats(inputStats)).toEqual(statsExit);
  });
});
