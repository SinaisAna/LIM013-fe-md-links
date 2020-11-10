//const chalk = require('chalk')
//const { chalk } = chalk;
import chalk from 'chalk';
console.log(chalk.green);

export const validateStats = (obj) => {
	let allLinks = [];
	let broken = 0;
	obj.forEach((link) => { allLinks.push(link.href); link.status != 200 ? broken += 1 : broken += 0 })
	const uniqueLinks = allLinks.filter((elem, index) => allLinks.indexOf(elem) === index)
	const texto = `
	${chalk.green("Total =" + " " + allLinks.length)}
	${chalk.blue("Unique =" + " " + uniqueLinks.length)}
	${chalk.yellow("Broken =" + " " + broken)}
			  `
	console.log(texto)
  }