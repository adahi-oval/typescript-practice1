/**
 * Encuentra todos los caminos posibles desde la esquina superior izquierda hasta la esquina inferior derecha de una matriz.
 * @param row La fila actual.
 * @param col La columna actual.
 * @param path El camino actual.
 * @param allPaths Todos los caminos encontrados hasta el momento.
 * @param rows El número total de filas en la matriz.
 * @param cols El número total de columnas en la matriz.
 * @param matrix La matriz dada.
*/
export function findPaths(row: number, col: number, path: Array<number>, allPaths: Array<Array<number>>, rows: number, cols: number, matrix: Array<Array<number>>) {
  // Agregar la celda actual al camino
  path.push(matrix[row][col]);

  // Si hemos alcanzado la esquina inferior derecha, agregar el camino completo a la lista de todos los caminos
  if (row === rows - 1 && col === cols - 1) {
    allPaths.unshift([...path]); // unshift para que agregue por el principio y no tener que ordenar
  } else {
    // Si no estamos en la esquina inferior derecha, moverse hacia abajo si es posible
    if (row + 1 < rows) {
      findPaths(row + 1, col, path, allPaths, rows, cols, matrix);
    }
    // Si no estamos en la esquina inferior derecha, moverse hacia la derecha si es posible
    if (col + 1 < cols) {
      findPaths(row, col + 1, path, allPaths, rows, cols, matrix);
    }
  }

  // Retirar la celda actual del camino antes de retroceder
  path.pop();
}

/**
 * Genera una lista de todos los posibles caminos desde la esquina superior izquierda hasta la esquina inferior derecha
 * en una matriz dada, moviéndose solo hacia abajo o hacia la derecha.
 * @param rows - El número de filas de la matriz.
 * @param cols - El número de columnas de la matriz.
 * @param matrix - La matriz dada.
 * @returns Una lista de todos los posibles caminos.
 */
export function getPaths(rows: number, cols: number, matrix: Array<Array<number>>): Array<Array<number>> {
  // Iniciar la búsqueda desde la esquina superior izquierda
  const paths: Array<Array<number>> = [];
  findPaths(0, 0, [], paths, rows, cols, matrix);

  return paths;
}