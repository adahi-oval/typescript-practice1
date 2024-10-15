/**
 * Retorna una función que multiplica cada elemento de un array por un valor numérico.
 * @param numbers El array de números a multiplicar.
 * @returns Una función que toma un valor numérico y retorna un nuevo array con los elementos multiplicados.
 */
export function multiplyAll(numbers: number[]): (value: number) => number[] {
  // Retorna una función que realiza la multiplicación
  return function(value: number): number[] {

    // Multiplica cada elemento del array por el valor dado
    let result: Array<number> = [];

    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index] * value;
      result.push(element);
    }

    return result;
  };
}