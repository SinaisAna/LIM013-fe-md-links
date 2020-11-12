import chalk from 'chalk';
// Busqueda isomórfica
//  fetchen su código de nodo de una manera compatible con todos los navegadores
import 'isomorphic-fetch';
console.log(fetch);

//Aqui fetch me retorma una promesa y el parametro es un objeto

export const promesaFetch = (objeto) => fetch(objeto.href)
.then((dato) => {
    objeto.status = dato.status,
    objeto.statusText = dato.statusText;
    return objeto
})

// VALIDAR LINKS - Recibe un array de objetos, retorna una promesa
export const validarLinks = (arrayURL) => {
    //Aqui mapeo todas
    const guardarPromesas =arrayURL.map((obj) =>{
        return promesaFetch(obj)
    })
    // eslint-disable-next-line no-undef
    if(arrayURL.length > 0){
    return Promise.all(guardarPromesas)
    }else {
        return chalk.black.bgYellowBright('WARNING:') + chalk.yellow(' - ') + 'No ahi links en este archivo';
    }
// Si alguna de las promesas pasadas en el argumento iterable falla, la promesa all es rechazada
// descartando todas las demás promesas hayan sido o no cumplidas.
}