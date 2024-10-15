/**
 * Concatena dos listas en una nueva lista.
 * @param list1 La primera lista.
 * @param list2 La segunda lista.
 * @returns Una nueva lista que contiene los elementos de ambas listas.
 */
export function append(list1: Array<any>, list2: Array<any>): Array<any> {
  return [...list1, ...list2]; // Se utiliza el operador de propagación para unir las dos listas.
}

/**
 * Concatena varias listas en una sola lista.
 * @param listas Las listas a concatenar.
 * @returns Una nueva lista que contiene los elementos de todas las listas.
 */
export function concatenate(listas: Array<Array<any>>): Array<any> {
  let bigList: Array<any> = [];
  for (const lista of listas) {
    bigList = append(bigList, lista);
  }
  return bigList;
}

/**
 * Filtra los elementos de una lista según un predicado.
 * @param pred La función predicado que determina si un elemento debe incluirse en la lista filtrada.
 * @param lista La lista a filtrar.
 * @returns Una nueva lista que contiene solo los elementos que cumplen el predicado.
 */
export function filter(pred: (item: any) => boolean, lista: Array<any>): Array<any> {
  let goodList: Array<any> = [];
  for (const element of lista) {
    if (pred(element)) { 
      goodList = append(goodList, [element]);
    }
  }
  return goodList;
}

/**
 * Calcula la longitud de una lista.
 * @param list La lista de la que se desea conocer la longitud.
 * @returns La longitud de la lista.
 */
export function length(list: Array<any>): number {
  let count: number = 0;
  for (const element in list) {
    count++;
  }
  return count;
}

/**
 * Aplica una función a cada elemento de la lista y devuelve una lista con los resultados.
 * @param func La función a aplicar a cada elemento.
 * @param lista La lista sobre la que se aplicará la función.
 * @returns Una nueva lista que contiene los resultados de aplicar la función a cada elemento.
 */
export function map(func: (item: any) => any, lista: Array<any>): Array<any> {
  let result: Array<any> = [];
  for (const element of lista) {
    result = append(result, [func(element)]);
  }
  return result;
}

/**
 * Reduce cada elemento de la lista en el acumulador desde la izquierda.
 * @param func La función de reducción.
 * @param lista La lista de elementos.
 * @param accum El acumulador inicial.
 * @returns El resultado de la reducción.
 */
export function reduce(func: (accum: any, item: any) => any, lista: Array<any>, accum: any): any {
  for (const element of lista) {
    accum = func(accum, element);
  }
  return accum;
}

/**
 * Devuelve una lista con los elementos en orden inverso.
 * @param lista La lista de entrada.
 * @returns Una nueva lista con los elementos en orden inverso.
 */
export function reverse(lista: Array<any>): Array<any> {
  let reverseList: Array<any> = [];
  for (let index = length(lista) - 1; index >= 0; index--) {
    reverseList = append(reverseList, [lista[index]]);
  }
  return reverseList;
}
