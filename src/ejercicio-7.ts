/**
 * Verifica si el camino describe un movimiento de retorno.
 * @param directions - Un array de direcciones ('n', 's', 'e', 'o').
 * @returns Verdadero si el camino describe un movimiento que vuelve al punto de partida.
 */
export function doesItGoBack(directions: Array<string>): boolean {
  // Si no hay direcciones, devolver undefined
  if (directions.length === 0) {
    return undefined;
  }

  // Contador para el número de cada dirección
  const dirCount: { [key: string]: number } = {
    'n': 0,
    's': 0,
    'e': 0,
    'o': 0
  };

  // Contar el número de cada dirección
  for (let index = 0; index < directions.length; index++) {
    const element = directions[index];
    dirCount[element]++;
  }

  // Verificar si el número de 'n' es igual al número de 's' y el número de 'e' es igual al número de 'o'
  if (dirCount['n'] === dirCount['s'] && dirCount['e'] === dirCount['o']) {
    return true;
  } else {
    return false;
  }

}

/**
 * Verifica si el camino es válido para el tiempo dado.
 * @param directions - Un array de direcciones ('n', 's', 'e', 'o').
 * @param time - El tiempo máximo permitido para el camino.
 * @returns Verdadero si el camino es válido para el tiempo dado, falso de lo contrario.
 */
export function getCartesianPath(directions: Array<string>, time: number): boolean {
  
  // Si el array de direcciones está vacío o no es un camino de retorno, devolver undefined
  if (directions.length === 0 || !doesItGoBack(directions)) {
    return undefined;
  }

  // Si la longitud del camino es menor o igual al tiempo, devolver true; de lo contrario, devolver false
  else if (directions.length <= time) {
    return true;
  } else {
    return false;
  }

}
