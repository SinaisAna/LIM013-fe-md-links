// Busqueda isomórfica
//  fetchen su código de nodo de una manera compatible con todos los navegadores
import 'isomorphic-fetch';

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
    return Promise.all(guardarPromesas)
}
