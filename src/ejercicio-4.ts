/**
 * Múltiplos de un número dado, menores que otro número dado.
 * @param base La base para factorizar.
 * @param num El número con el que comparar.
 * @returns Un array con las potencias de 2 que componen el número.
 */
export function multiplosMenores(base: number, num: number): Array<number> {
  // Verificar si num es un número entero positivo, y si la base es mayor que el número dado.
  if (!Number.isInteger(num) || num <= 0 || !Number.isInteger(base) || base <= 0 || base > num) {
    return undefined; // Devuelve undefined si alguno de los argumentos no es válido.
  }

  let result: Array<number> = [];
  let count: number = 1;

  while ((base * count) < num) {
    result.push(base * count); // Añade los múltiplos de base menores que num al resultado.
    count++;
  }

  return result;
}

/**
 * Calcula la puntuación total obtenida por la presencia de múltiplos de diferentes objetos en una fase.
 * @param objetos Un array de números que representan los objetos.
 * @param fase El número de la fase.
 * @returns La puntuación total obtenida.
 */
export function getPoints(objetos: Array<number>, fase: number): number {
  
  let listasMultiplos: Array<Array<number>> = [];

  // Para cada objeto, calcula los múltiplos menores que fase y los agrega a una lista.
  for (let index = 0; index < objetos.length; index++) {
    const element: number = objetos[index];
    const multList: Array<number> = multiplosMenores(element, fase);

    // Si algún objeto no es válido, devuelve undefined.
    if (multList === undefined) { return undefined; } 
    else { listasMultiplos.push(multList); }

  }

  // Concatena todas las listas de múltiplos y elimina los duplicados.
  const bigList: Array<number> = [].concat(...listasMultiplos);
  const uniqueList: Array<number> = [...new Set(bigList)].sort((a, b) => a - b);

  return uniqueList.reduce((points, num) => points + num, 0);
}