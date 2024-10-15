/**
 * Factoriza un número en potencias de 2.
 * @param num El número a factorizar.
 * @returns Un array con las potencias de 2 que componen el número.
 */
export function factorizarBase2(num: number): Array<number> {
  // Verificar si num es un número entero positivo
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error('El argumento debe ser un número entero positivo.');
  }

  let result: Array<number> = []
  let factor: number = num;

  do {
    let aux: number = 2 ** Math.floor(Math.log2(factor));
    result.push(aux); // Coge la parte entera del log en base 2 del numero.
    factor = factor - aux; // Le resta aux, que será lo mismo que pusheamos al resultado.
  } while (factor !== 0);

  return result;
}

/**
 * Convierte un número entero positivo en una lista de acciones.
 * @param actions El número entero positivo que representa una combinación de acciones.
 * @returns Un array con las acciones correspondientes al número.
 */
export function fromIntToActions(actions: number): Array<string> {
  // Verificar si actions es un número entero positivo
  if (!Number.isInteger(actions)) {
    throw new Error('El argumento debe ser un número entero positivo.');
  }

  if (actions <= 0) {
    return undefined;
  }

  let result: Array<string> = [];
  let factors: Array<number> = factorizarBase2(actions);
  factors.sort((a, b) => a - b);

  const actionsMap: { [key: number]: string } = {
    1: 'Parpadear',
    2: 'Parpadear dos veces',
    4: 'Mover la nariz',
    8: 'Levantar las cejas',
    16: 'Saltar',
    32: 'Saltar a la pata coja',
    64: 'Agacharse',
    128: 'Dar un aplauso'
  };

  for (let index = 0; index < factors.length; index++) {
    if (factors[index] > 128) { continue; }
    result.push(actionsMap[factors[index]]);
  }

  return result;
}

