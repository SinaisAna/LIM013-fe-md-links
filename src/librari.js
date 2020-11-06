const fs = require('fs');
const path = require('path');

var file = fs.readdirSync('./', 'UTF-8');
console.log(file);

export const mdLinksMethds = {
    validatePath: (router) => fs.existsSync(router),
    // verifico si el path es adsoluto, si es relativo se cambia a adsoluto
}