/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
// Busqueda isomórfica
//  fetchen su código de nodo de una manera compatible con todos los navegadores
import 'isomorphic-fetch';

// Aqui fetch me retorma una promesa y el parametro es un objeto
// eslint-disable-next-line no-undef
export const promesaFetch = (objeto) => fetch(objeto.href)
  .then((dato) => {
    // eslint-disable-next-line no-sequences
    objeto.status = dato.status,
    objeto.statusText = dato.statusText;
    return objeto;
  });

// VALIDAR LINKS - Recibe un array de objetos, retorna una promesa
export const validarLinks = (arrayURL) => {
  // Aqui mapeo todas
  const guardarPromesas = arrayURL.map((obj) =>
    promesaFetch(obj));
  return Promise.all(guardarPromesas);
};
