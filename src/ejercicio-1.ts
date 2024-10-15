export type Rational = {
  num: number;
  denom: number;
};

/**
 * Calcula el máximo común divisor (MCD) de el numerador y denominador de un número racional para encontrar la fracción indivisible.
 * @param num El numerador del número racional.
 * @param denom El denominador del número racional.
 * @returns El máximo común divisor (MCD) de los dos números.
 */
export function mcd(num: number, denom: number): number {
  while(denom !== 0) {
    let temp = denom;
    denom = num % denom;
    num = temp;
  }

  return num;
}

/**
 * Calcula el mínimo común múltiplo de los denominadores de dos número racionales.
 * @param denom1 El denominador del primer número.
 * @param denom2 El denominador del segundo número.
 * @returns El mínimo común multiplo de los dos.
 */
export function mcm(denom1: number, denom2: number): number {

  return (denom1 * denom2) / mcd(denom1, denom2);

}


/**
 * Calcula el valor absoluto del numero tipo Rational dado.
 * @param ratio El numero racional en cuestión.
 * @returns El mismo número con su numerador y denominador siendo positivos.
 */
export function abs(ratio: Rational): Rational {

  if (ratio.denom === 0) {
    throw new Error('Error: El denominador no puede ser cero.');
  }

  if(ratio.num < 0) { ratio.num *= -1 }
  if(ratio.denom < 0) { ratio.denom *= -1 }

  return ratio;
}

/**
 * Calcula el inverso multiplicativo del número tipo Rational dado.
 * @param ratio El numero racional en cuestión.
 * @returns El mismo número con su numerador y denominador intercambiados.
 */
export function inv(ratio: Rational): Rational {

    // Validar que los denominadores no sean cero
    if (ratio.denom === 0) {
      throw new Error('Error: El denominador no puede ser cero.');
    }

  let temp: Rational = {
    num: 1,
    denom: 1
  };

  temp.num = ratio.denom;
  temp.denom = ratio.num;

  return temp
}

/**
 * Suma dos números racionales.
 * @param ratio1 El primer número racional.
 * @param ratio2 El segundo número racional.
 * @returns El resultado de la suma como un nuevo número racional.
 */
export function add(ratio1: Rational, ratio2: Rational): Rational {

  // Validar que los denominadores no sean cero
  if (ratio1.denom === 0 || ratio2.denom === 0) {
    throw new Error('Error: El denominador no puede ser cero.');
  }

  const minmul = mcm(ratio1.denom, ratio2.denom);
  
  const num1 = ratio1.num * (minmul / ratio1.denom);
  const num2 = ratio2.num * (minmul / ratio2.denom);

  const numResult = num1 + num2;

  // Simplificamos con el maximo comun divisor para la fraccion indivisible.
  const maxdiv = mcd(numResult, minmul);

  let result: Rational = {
    num: numResult / maxdiv,
    denom: minmul / maxdiv
  };

  return result;
}

/**
 * Resta dos números racionales.
 * @param ratio1 El primer número racional.
 * @param ratio2 El segundo número racional.
 * @returns El resultado de la resta como un nuevo número racional.
 */
export function sub(ratio1: Rational, ratio2: Rational): Rational {

  // Validar que los denominadores no sean cero
  if (ratio1.denom === 0 || ratio2.denom === 0) {
    throw new Error('Error: El denominador no puede ser cero.');
  }

  // Multiplicar el segundo número por -1 y luego sumar
  ratio2.num *= -1;
  return add(ratio1, ratio2);
}

/**
 * Multiplica dos números racionales.
 * @param ratio1 El primer número racional.
 * @param ratio2 El segundo número racional.
 * @returns El resultado de la multiplicación como un nuevo número racional.
 */
export function mult(ratio1: Rational, ratio2: Rational): Rational{

  // Validar que los denominadores no sean cero
  if (ratio1.denom === 0 || ratio2.denom === 0) {
    throw new Error('Error: El denominador no puede ser cero.');
  }

  return {
    num: ratio1.num * ratio2.num,
    denom: ratio1.denom * ratio2.denom
  };
}

/**
 * Divide dos números racionales.
 * @param ratio1 El primer número racional.
 * @param ratio2 El segundo número racional.
 * @returns El resultado de la división como un nuevo número racional.
 */
export function div(ratio1: Rational, ratio2: Rational): Rational {

  // Validar que los denominadores no sean cero
  if (ratio1.denom === 0 || ratio2.denom === 0) {
    throw new Error('Error: El denominador no puede ser cero.');
  }

  // Invertir el segundo número racional y luego multiplicar
  return mult(ratio1, inv(ratio2));
}