#!/usr/bin/env node
/* eslint-disable no-undef */
import { mdLinks } from '../lib/librari.js';
import chalk from 'chalk';
import {validateStats, validate, stats, onlyPath } from './cli-opciones.js';

const help = chalk.white`
Md-links es una biblioteca que analiza y encuentra enlaces en archivos Markdown.\n`
+ chalk.rgb(205, 0, 185).inverse.bgWhite.bold`
-------------- Opciones ------------------\n`
+ chalk.white`
Lista de enlaces y análisis HTTP:`
+ chalk.rgb(0, 255, 255)`
validate ------------> --validate\n`
+ chalk.white`
Estadísticas de enlaces únicos y rotos:`
+ chalk.rgb(0, 255, 255)`
stats ---------------> --stats
validate & stats ----> --validate --stats
-----------------------------------------
`;

const path = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];
const arrOfTerminal = process.argv;


if (arrOfTerminal.length < 6) {
  if ((path && option1 === '--validate' && option2 === '--stats')|| (option1 === '--stats' && option2 === '--validate')) {
    mdLinks(path, { validate: true })
      .then((obj) => {
        validateStats(obj)
      })
  } else if (path && option1 === '--validate' && !option2) {
    mdLinks(path, { validate: true })
      .then((obj) => {
        validate(obj)
      })
      .catch((err) => console.log(err));
  } else if (path && option1 === '--stats' && !option2) {
    mdLinks(path)
      .then((obj) => {
        stats(obj)
      })
  } else if (path && !option1 && !option2) {
    mdLinks(path)
      .then((obj) => {
        onlyPath(obj)
      })
    } else if (path && option1 === 'help'){
      mdLinks(path)
      .then((obj) => {
        help(obj)
      })
      .catch((err) => console.log(err));
    
  } else {
    console.log(chalk.bgRedBright('FAIL:') + chalk.yellow(' --> ') + chalk.yellowBright.underline('Verificar opciones introducidas'),help)
  }
} else {
  console.log(chalk.bgRedBright('FAIL:') + chalk.yellow(' --> ') + chalk.yellowBright.underline('Has colocado opciones de mas'))
}

