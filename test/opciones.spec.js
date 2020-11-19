/* eslint-disable no-undef */
import chalk from 'chalk';
import * as funcionesopcion from '../cli/cli-opciones.js';

const arrObjValidated = [
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
const statsLink = `${chalk.green("Total =" + "3" )} ${chalk.blue("Unique =" + "3")}`;
describe('Get statistis of total and unique links of an ', () => {
  it('should return an array of links from all md files', () => {
    expect(funcionesopcion.stats(arrObjValidated)).toEqual(statsLink);
  });
});