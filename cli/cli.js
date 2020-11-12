#!/usr/bin/env node
import { mdLinks } from '../lib/librari.js';
import chalk from 'chalk';
import {validateStats, validate, stats, onlyPath } from './cli-opciones.js';

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
      .catch((err) => console.log(err));
  } else {
    console.log(chalk.bgRedBright('FAIL:') + chalk.yellow(' --> ') + chalk.yellowBright.underline('Verificar opciones introducidas'))
  }
} else {
  console.log(chalk.bgRedBright('FAIL:') + chalk.yellow(' --> ') + chalk.yellowBright.underline('Has colocado opciones de mas'))
}

