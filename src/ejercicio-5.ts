/**
 * Genera una tabla de productos para los números del 1 al 'num'.
 * Cada fila de la tabla corresponde a la multiplicación de 'num' por los números del 1 al 'num'.
 * @param num El número hasta el cual generar la tabla de productos.
 * @returns Una matriz bidimensional que representa la tabla de productos.
 * Si 'num' es menor o igual a 0, retorna undefined.
 */
export function productTable(num: number): Array<Array<number>> {
  // Verifica si 'num' es menor o igual a 0
  if (num <= 0) { 
    return undefined; 
  }

  // Inicializa un array para almacenar los factores
  let factors: Array<number> = []

  // Llena el array 'factors' con los números del 1 al 'num'
  for (let index = 1; index <= num; index++) {
    factors.push(index);
  }

  // Inicializa un array bidimensional para almacenar la tabla de productos
  let result: Array<Array<number>> = [];

  // Genera la tabla de productos
  for (let index: number = 1; index <= num; index++) {
    let table: Array<number> = [];
    
    // Calcula los productos para la fila actual
    for (let index2: number = 0; index2 < factors.length; index2++) {
      table.push(index * factors[index2]);
    }

    // Agrega la fila a la tabla de productos
    result.push(table);
  }

  return result;
}
