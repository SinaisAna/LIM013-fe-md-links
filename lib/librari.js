import chalk from 'chalk';
import { exists, verificateAbsolute, archivosDirectorios, extraerMD, findLinks } from './index.js';
import { validarLinks } from './validate.js';

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    const pathAbsoluta = verificateAbsolute(path);
    if(exists(path) == true && options){
      console.log("entro");

      extraerMD(archivosDirectorios(pathAbsoluta))
      .then((archivo) => validarLinks(findLinks(archivo)))
      .then((arrobj) => resolve(arrobj));

    }else if (exists(path) == true && !options) {

      extraerMD(archivosDirectorios(pathAbsoluta))
      .then((archive) => resolve(findLinks(archive)));
    }else{
      reject(chalk.bgRedBright('FAIL:') + chalk.red(' x') + 'No es una ruta valida');
    }
  })
}
mdLinks("C:\\Users\\Esau Ocrospoma\\Desktop\\md-links\\LIM013-fe-md-links\\test\\archivo_prueba\\archivo_prueba2\\archivo_prueba3\\archivo5.md", { validate : true })
.then((archivo) => console.log(archivo));
/*
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksMethds = void 0;

var fs = require('fs');

var path = require('path');
const archivo = 'prueba.text';
if(fs.existsSync(archivo)){
  console.log('el archivo no existe');
}else{
  console.log('wl archivo no existe');
}
var file = fs.readdirSync('./', 'UTF-8');
console.log(file);
var mdLinksMethds = {
  validatePath: function validatePath(router) {
    return fs.existsSync(router);
  } // verifico si el path es adsoluto, si es relativo se cambia a adsoluto

};
exports.mdLinksMethds = mdLinksMethds;
*/