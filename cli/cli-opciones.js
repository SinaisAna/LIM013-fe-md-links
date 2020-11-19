/* eslint-disable no-useless-concat */
/* eslint-disable no-console */
/* eslint-disable no-tabs */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import chalk from 'chalk';
// console.log(chalk.green);

export const validateStats = (obj) => {
  const allLinks = [];
  let broken = 0;
  // eslint-disable-next-line no-unused-expressions
  obj.forEach((link) => { allLinks.push(link.href); link.status != 200 ? broken += 1 : broken += 0; });
  const uniqueLinks = allLinks.filter((elem, index) => allLinks.indexOf(elem) === index);
  const texto = `
	${chalk.green(`${'Total =' + ' '}${allLinks.length}`)}
	${chalk.blue(`${'Unique =' + ' '}${uniqueLinks.length}`)}
	${chalk.yellow(`${'Broken =' + ' '}${broken}`)}
			  `;
  console.log(texto);
};

export const validate = (obj) => {
  let show = '';
  // eslint-disable-next-line no-shadow
  obj.forEach((obj) => {
    show += `
    ${chalk.greenBright(obj.href)} ${obj.status < 400 ? chalk.bgYellow.bold(chalk.gray(obj.status)) : chalk.bgRed(obj.status)} ${obj.statusText === 'OK' ? chalk.yellow(obj.statusText) : chalk.red(obj.statusText)} ${chalk.blue(obj.text)}`;
  });
  console.log(show);
};

export const stats = (links) => {
  const uniqueLinks = new Set(links.filter((element) => element.href));
  const texto = (`
	${chalk.green(`${'Total =' + ' '}${links.length}`)}
	${chalk.blue(`${'Unique =' + ' '}${uniqueLinks.size}`)}`);
  return texto;
};

export const onlyPath = (obj) => {
  let show = '';
  // eslint-disable-next-line no-shadow
  obj.forEach((obj) => {
    show += `${(obj.link).slice(0, 40)} ${chalk.greenBright(obj.href)} ${chalk.blue(obj.text)}\n`;
  });
  console.log(show);
};
