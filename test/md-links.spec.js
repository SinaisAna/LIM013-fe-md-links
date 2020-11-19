/* eslint-disable no-undef */
import { mdLinks } from '../lib/librari.js';

const newLocal = 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\ultimo_archivo';
const newLocalerror = 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo';
// mdlinks;
describe('test para mdLinks', () => {
  it('deberia devolver un array de objetos', () => {
    const ouput = [
      {
        href: 'https://zellwk.com/blog/publish-to-npm/',
        text: 'Cómo publicar paquetes en npm',
        link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\ultimo_archivo\\archivo6.md',
        status: 200,
        statusText: 'OK',
      },
      {
        href: 'https://www.npmjs.com/package/figlet',
        text: 'figlet',
        link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\ultimo_archivo\\archivo9.md',
        status: 200,
        statusText: 'OK',
      },
      {
        href: 'http://patorjk.com/software/taag/',
        text: 'FIGfont',
        link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\ultimo_archivo\\archivo9.md',
        status: 200,
        statusText: 'OK',
      },
    ];
    mdLinks(newLocal).then((res) => {
      expect(res(newLocal)).toEqual(ouput);
    }).catch((error) => error);
  });
});

describe('mdlinks ', () => {
  test('deberia retornar un array de objeto  para validate:false', () => {
    const ouput = [
      {
        href: 'https://www.solvetic.com/tutoriales/article/3610-configurar-administrar-firewall-windows-10-con-powershell/',
        text: 'herramientas de gestión',
        link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo1.md',

      },
      {
        href: 'https://www.solvetic.com/tutoriales/article/3097-como-crear-carpetas-y-particiones-con-windows-powershell/',
        text: 'administración del sistema operativo',
        link: 'C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo2.md',

      },
    ];
    mdLinks(newLocalerror).then((res) => {
      expect(res(newLocalerror)).toEqual(ouput);
    }).catch((error) => error);
  });
});
