import chalk from 'chalk';
import {
  exists, verificateAbsolute, archivosDirectorios, extraerMD, findLinks,
} from './index.js';
import { validarLinks } from './validate.js';

export const mdLinks = (path, options) => new Promise((resolve, reject) => {
  const pathAbsoluta = verificateAbsolute(path);
  // eslint-disable-next-line eqeqeq
  if (exists(path) == true && options) {
    extraerMD(archivosDirectorios(pathAbsoluta))
      .then((archivo) => validarLinks(findLinks(archivo)))
      .then((arrobj) => resolve(arrobj));

  // eslint-disable-next-line eqeqeq
  } else if (exists(path) == true && !options) {
    extraerMD(archivosDirectorios(pathAbsoluta))
      .then((archivo) => resolve(findLinks(archivo)));
  } else {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject(`${chalk.bgRedBright('FAIL:') + chalk.red(' x')}No es una ruta valida`);
  }
});
mdLinks('C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo4.md', { validate: true });
