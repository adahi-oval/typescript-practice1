## Ejercicio 1 - Números Racionales

Se define un tipo de datos `Rational`, que consiste en el numerador `num` y el denominador `denom`. Con ello se trabajará en este ejercicio. En primer lugar, se necesitan dos funciones adicionales: `mcd` y `mcm` para calcular el máximo común divisor y el mínimo común múltiplo, respectivamente. La función `mcd` utiliza el algoritmo de Euclides:

```typescript
  export function mcd(num: number, denom: number): number {
    while(denom !== 0) {
      let temp = denom;
      denom = num % denom;
      num = temp;
    }

    return num;
  }
```

La función `mcm` hace uso de la función anterior para calcular el mínimo comúm múltiplo, multiplicando los dos parámetros de la función y, para asegurarnos que es el mínimo, se divide entre el máximo común divisor de los parámetros:

```typescript
  export function mcm(denom1: number, denom2: number): number {

    return (denom1 * denom2) / mcd(denom1, denom2);

  }
```

Con estas funciones aclaradas, pasamos a las funciones principales del ejercicio: `abs`, `inv`, `add`, `sub`, `mult` y `div`.

#### Función `abs`

En primer lugar, `abs` simplemente comprueba si el numerador o el denominador del número racional es negativo y en caso de que lo sea lo multiplica por $-1$ para cambiarle el signo y hacerlo positivo:

```typescript
  export function abs(ratio: Rational): Rational {

    if (ratio.denom === 0) {
      throw new Error('Error: El denominador no puede ser cero.');
    }

    if(ratio.num < 0) { ratio.num *= -1 }
    if(ratio.denom < 0) { ratio.denom *= -1 }

    return ratio;
  }
```

#### Función `inv`

Esta función calcula el inverso de un número racional. Para esto, intercambia el numerador y el denominador del número racional dado.

```typescript
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
```


#### Función `add`

Esta función suma dos números racionales. Para realizar la suma, primero se calcula el mínimo común múltiplo `mcm` de los denominadores de ambos números racionales. Luego se ajustan los numeradores de cada fracción multiplicándolos por el mcm dividido por su denominador original. Finalmente, se suman los numeradores ajustados y se simplifica el resultado dividiendo tanto el numerador como el denominador por el máximo común divisor `mcd` de ambos.

```typescript
export function add(ratio1: Rational, ratio2: Rational): Rational {

  if (ratio1.denom === 0 || ratio2.denom === 0) {
    throw new Error('Error: El denominador no puede ser cero.');
  }

  const minmul = mcm(ratio1.denom, ratio2.denom);
  
  const num1 = ratio1.num * (minmul / ratio1.denom);
  const num2 = ratio2.num * (minmul / ratio2.denom);

  const numResult = num1 + num2;

  const maxdiv = mcd(numResult, minmul);

  let result: Rational = {
    num: numResult / maxdiv,
    denom: minmul / maxdiv
  };

  return result;
}
```


#### Función `sub`

Esta función resta el segundo número racional del primero. Para lograr esto, primero se multiplica el numerador del segundo número por $-1$ y luego se llama a la función `add` para sumar ambos números racionales.

```typescript
export function sub(ratio1: Rational, ratio2: Rational): Rational {

  if (ratio1.denom === 0 || ratio2.denom === 0) {
    throw new Error('Error: El denominador no puede ser cero.');
  }

  ratio2.num *= -1;
  return add(ratio1, ratio2);
}
```


#### Función `mult`

Esta función multiplica dos números racionales simplemente multiplicando sus numeradores y denominadores respectivos.

```typescript
export function mult(ratio1: Rational, ratio2: Rational): Rational{

  if (ratio1.denom === 0 || ratio2.denom === 0) {
    throw new Error('Error: El denominador no puede ser cero.');
  }

  return {
    num: ratio1.num * ratio2.num,
    denom: ratio1.denom * ratio2.denom
  };
}
```


#### Función `div`

Esta función divide el primer número racional por el segundo, lo que es equivalente a multiplicar el primero por el inverso del segundo.

```typescript
  export function div(ratio1: Rational, ratio2: Rational): Rational {

    if (ratio1.denom === 0 || ratio2.denom === 0) {
      throw new Error('Error: El denominador no puede ser cero.');
    }

    return mult(ratio1, inv(ratio2));
  }
```

## Ejercicio 2 - Señales corporales

En este ejercicio, hay que descomponer un número en factores en base $2$. Estos factores corresponden a diferentes acciones según una lista dada. La lista ha sido implementada como un hashmap, donde las potencias de 2 son las claves. Para desarrollar este ejercicio se han escrito dos funciones: `factorizarBase2` y `fromIntToActions`.

#### Función `factorizarBase2`

Esta función factoriza un número en potencias de 2. Comienza verificando si el número dado es un número entero positivo. Luego, itera sobre el número, calculando la potencia de 2 más grande que puede ser extraída de él en cada iteración. A continuación, resta esta potencia del número original y la agrega al resultado. Este proceso se repite hasta que el número original se convierte en 0.

```typescript
  export function factorizarBase2(num: number): Array<number> {
    if (!Number.isInteger(num) || num <= 0) {
      throw new Error('El argumento debe ser un número entero positivo.');
    }

    let result: Array<number> = []
    let factor: number = num;

    do {
      let aux: number = 2 ** Math.floor(Math.log2(factor));
      result.push(aux); 
      factor = factor - aux; 
    } while (factor !== 0);

    return result;
  }
```

#### Función `fromIntToActions`

Esta función convierte un número entero positivo en una lista de acciones. Primero verifica si el número dado es un número entero positivo. Luego, utiliza la función `factorizarBase2` para obtener las potencias de 2 que componen el número. Luego, ordena estas potencias y las compara con un conjunto predefinido de acciones. Las acciones correspondientes a las potencias presentes en el número se agregan al resultado.

```typescript
  export function fromIntToActions(actions: number): Array<string> {
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
```

## Ejercicio 3 - Scrabble

En este ejercicio, se necesita calcular la puntuación de cada palabra dentro de una lista. La puntuación se calcula mediante cada letra, que tiene un valor asignado en un hashmap donde las letras son la clave. Sumando todas las puntuaciones de las letras se obtiene la puntuación de cada palabra. Para ello se describieron dos funciones: `splitLetters`y `getScore`.

#### Función `splitLetters`

Esta función divide una palabra en sus letras individuales, teniendo en cuenta las letras con acentos y la doble 'LL'. Comienza convirtiendo la palabra a mayúsculas y luego la divide en un array de letras. Luego, itera sobre este array de letras y verifica si se encuentran combinaciones especiales como 'LL', 'CH' y 'RR' haciendo uso de varias condiciones. En primer lugar, se comprueba si se encuentra la primera letra de alguna de estas combinaciones, luego se comprueba si está al final de la palabra y por último si la letra siguiente es la otra letra de la combinación especial. Si encuentra alguna de estas combinaciones, las agrega al resultado como una sola letra. Además, maneja las letras con acentos, convirtiéndolas en letras sin acento mediante un hashmap. Finalmente, devuelve un array con las letras de la palabra, sin acentos y con la doble 'LL' representada como una sola letra.

```typescript
export function splitLetters(word: string): Array<string> {
  let result: Array<string> = [];
  const letters: Array<string> = word.toUpperCase().split('');

  const acentos: { [key: string]: string } = {
    'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U'
  };

  for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    
    if(element == 'L' && index != letters.length - 1 && letters[index + 1] == 'L'){
      result.push('LL');
      index++;
    }
    else if(element == 'C' && index != letters.length - 1 && letters[index + 1] == 'H'){
      result.push('CH');
      index++;
    }
    else if(element == 'R' && index != letters.length - 1 && letters[index + 1] == 'R'){
      result.push('RR');
      index++;
    }
    else if (acentos.hasOwnProperty(element)) {
      result.push(acentos[element]);  
    }
    else{
      result.push(element);
    }
  }

  return result;
}
```

#### Función `getScore`

Esta función calcula el puntaje para cada palabra basado en las puntuaciones de las letras. Comienza inicializando un objeto con las puntuaciones de cada letra y combinación especial. Luego, itera sobre el array de palabras y para cada palabra, divide las letras utilizando la función `splitLetters`. Luego, calcula la suma de las puntuaciones de las letras de la palabra, y si encuentra letras desconocidas, el puntaje correspondiente para esa palabra será 'undefined'. Finalmente, devuelve un array con los puntajes correspondientes a cada palabra.

```typescript
export function getScore(words: Array<string>): Array<number> {
  let result: Array<number> = [];

  const puntuaciones: { [key: string]: number } = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'Y': 4,
    'CH': 5, 'Q': 5,
    'J': 8, 'LL': 8, 'Ñ': 8, 'RR': 8, 'X': 8,
    'Z': 10
  };

  for (let index = 0; index < words.length; index++) {
    const word: string = words[index];
    let sum: number = 0;

    let letters: Array<string> = splitLetters(word);

    for (let letra = 0; letra < letters.length; letra++) {
      const element = letters[letra];

      if(!puntuaciones.hasOwnProperty(element)){ 
        sum = undefined;
        break;
      }
      else{ sum += puntuaciones[element] }
    }
    
    result.push(sum);

  }

  return result;
}
```

## Ejercicio 4 - Recolección de objetos

En este ejercicio se tienen que encontrar los múltiplos de una serie de números que son menores que el número de fase en el que estamos. Luego, debemos unir esas listas y eliminar duplicados, para así sumar todos sus componentes al final. Para ello se han escrito dos funciones: `multiplosMenores` y `getPoints`.

#### Función `multiplosMenores`

Esta función `multiplosMenores` toma dos parámetros `base` y `num`, donde `base` representa el número del cual se desean obtener los múltiplos y `num` es el número límite hasta el cual se buscarán los múltiplos. Calcula y devuelve un array con los múltiplos de `base` que son menores que `num`. Se verifican ciertas condiciones de validez de los argumentos, como que sea positivo y la base no sea mayor que num, y se devuelve `undefined` si alguno de los argumentos no es válido.

```typescript
  export function multiplosMenores(base: number, num: number): Array<number> {
    if (!Number.isInteger(num) || num <= 0 || !Number.isInteger(base) || base <= 0 || base > num) {
      return undefined; // Devuelve undefined si alguno de los argumentos no es válido.
    }

    let result: Array<number> = [];
    let count: number = 1;

    while ((base * count) < num) {
      result.push(base * count);
      count++;
    }

    return result;
  }
```

#### Función `getPoints`

Esta función calcula la puntuación total obtenida por la presencia de múltiplos de diferentes objetos en una fase. Funciona de la siguiente manera: toma un array de números que representan los objetos y un número que indica la fase. Se inicializa una lista de listas para almacenar los múltiplos de cada objeto. Luego, se recorren los objetos y para cada uno se calculan los múltiplos menores que la fase actual utilizando la función `multiplosMenores`. Si algún objeto no tiene múltiplos válidos, la función devuelve `undefined`. Después, se concatenan todas las listas de múltiplos en una sola lista y se eliminan los duplicados. Finalmente, se calcula la puntuación total sumando todos los múltiplos únicos y se devuelve.

```typescript
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
```

## Ejercicio 5 - Tablas de multiplicar

En este ejercicio, necesitamos calcular los `n` primeros miembros de las `n` primeras tablas de multiplicar con `n` siendo un parámtro que se le pasa a la función `producTable`. Esto se hace de la siguiente manera:

#### Función `productTable`

Primero, verifica si el número dado es menor o igual a 0; si lo es, devuelve `undefined`. Luego, genera una lista de factores del 1 al número dado. Después, crea una tabla bidimensional donde cada fila representa la tabla de multiplicación del número por los factores. Finalmente, devuelve la tabla de productos generada. En resumen, la función proporciona una representación estructurada de las multiplicaciones entre el número dado y sus factores.

```typescript
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
```

## Ejercicio 6 - Factoría de multiplicaciones

En este ejercicio tenemos que multiplicar una lista de números por otro valor numérico dado. Para ello habrá que devolver otra función dentro de la función principal `multiplyAll`.

#### Función `multiplyAll`

Esta función `multiplyAll` toma un array de números como entrada y devuelve una función que, cuando se llama con un valor numérico, multiplica cada elemento del array por ese valor y devuelve un nuevo array con los resultados de las multiplicaciones. Funciona de la siguiente manera: Retorna una función que acepta un parámetro `value` y devuelve un array con los resultados de multiplicar cada elemento del array original por `value`. La función interna, retornada por `multiplyAll`, recibe un parámetro `value`, crea un array `result` para almacenar los resultados de las multiplicaciones y luego itera sobre cada elemento del array `numbers`, multiplicando cada elemento por el valor dado y agregando el resultado al array `result`.

```typescript
export function multiplyAll(numbers: number[]): (value: number) => number[] {
  return function(value: number): number[] {

    let result: Array<number> = [];

    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index] * value;
      result.push(element);
    }

    return result;
  };
}
```

## Ejercicio 7 - El Cartesiano

En esta función, debemos verificar si una lista de direcciones tipo norte, sur, este y oeste son válidas para las condiciones que les proporcionamos a la función. Las funciones escritas para este ejercicio son: `doesItGoBack` y `getCartesianPath`.

#### Función `doesItGoBack`

Esta función `doesItGoBack` toma un array de direcciones como entrada y verifica si se puede regresar al punto de partida después de seguir todas las direcciones. Primero, verifica si no hay direcciones en el array; si es así, devuelve `undefined`. Luego, inicializa un contador `dirCount` para cada dirección cardinal (norte, sur, este, oeste) y cuenta el número de cada dirección en el array de direcciones. Después, verifica si el número de direcciones hacia el norte es igual al número de direcciones hacia el sur y si el número de direcciones hacia el este es igual al número de direcciones hacia el oeste. Si estas condiciones se cumplen, la función devuelve `true`, lo que indica que es posible regresar al punto de partida después de seguir las direcciones. De lo contrario, devuelve `false`.

```typescript
  export function doesItGoBack(directions: Array<string>): boolean {

  if (directions.length === 0) {
      return undefined;
    }

    const dirCount: { [key: string]: number } = {
      'n': 0,
      's': 0,
      'e': 0,
      'o': 0
    };

for (let index = 0; index < directions.length; index++) {
      const element = directions[index];
      dirCount[element]++;
    }

    if (dirCount['n'] === dirCount['s'] && dirCount['e'] === dirCount['o']) {
      return true;
    } else {
      return false;
    }

  }
```

#### Función `getCartesianPath`

Esta función `getCartesianPath` toma un array de direcciones y un tiempo como entrada y determina si es posible seguir el camino dentro del tiempo especificado. Primero, verifica si el array de direcciones está vacío o si no es un camino de retorno utilizando la función `doesItGoBack`; si alguna de estas condiciones se cumple, devuelve `undefined`. Luego, compara la longitud del camino con el tiempo especificado; si el camino es igual o más corto que el tiempo, devuelve `true`, lo que indica que es posible seguir el camino dentro del tiempo especificado. De lo contrario, devuelve `false`.

```typescript
  export function getCartesianPath(directions: Array<string>, time: number): boolean {
    
   
    if (directions.length === 0 || !doesItGoBack(directions)) {
      return undefined;
    }

    else if (directions.length <= time) {
      return true;
    } else {
      return false;
    }

  }
```

## Ejercicio 8 - Todos los caminos llevan a Roma

En este ejercicio debemos encontrar todos los caminos posibles desde la esquina superior izquierda de una matriz a la inferior derecha, solo moviendonos hacia abajo y hacia la derecha. Las funciones desarrolladas para este ejercicio son: `findPaths` y `getPaths`.

#### Función `findPaths`

Esta función recursiva `findPaths` busca todos los caminos posibles desde la celda superior izquierda hasta la celda inferior derecha en una matriz. Toma varios parámetros: la fila y la columna actuales (`row` y `col`), el camino actual (`path`), una lista de todos los caminos encontrados hasta el momento (`allPaths`), el número total de filas y columnas en la matriz (`rows` y `cols`), y la matriz en sí (`matrix`). Primero, agrega la celda actual al camino. Luego, verifica si hemos alcanzado la esquina inferior derecha; si es así, agrega el camino completo a la lista de todos los caminos. De lo contrario, verifica si es posible moverse hacia abajo o hacia la derecha desde la celda actual y llama recursivamente a la función para explorar estas posibilidades. Después de explorar todas las opciones desde la celda actual, retira la celda actual del camino antes de retroceder.

```typescript
  export function findPaths(row: number, col: number, path: Array<number>, allPaths: Array<Array<number>>, rows: number, cols: number, matrix: Array<Array<number>>) {
    path.push(matrix[row][col]);

    if (row === rows - 1 && col === cols - 1) {
      allPaths.unshift([...path]); 
    } else {
      if (row + 1 < rows) {
        findPaths(row + 1, col, path, allPaths, rows, cols, matrix);
      }
      if (col + 1 < cols) {
        findPaths(row, col + 1, path, allPaths, rows, cols, matrix);
      }
    }

    path.pop();
  }
```

#### Función `getPaths`

La función `getPaths` toma el número de filas, el número de columnas y una matriz como entrada, y devuelve todos los caminos posibles desde la esquina superior izquierda hasta la esquina inferior derecha en la matriz dada. Inicializa una lista vacía `paths` para almacenar todos los caminos encontrados. Luego, llama a la función `findPaths`, que busca recursivamente todos los caminos posibles, comenzando desde la celda superior izquierda (fila 0, columna 0), y agrega estos caminos a la lista `paths`. Finalmente, devuelve la lista `paths` que contiene todos los caminos encontrados en la matriz.

```typescript
  export function getPaths(rows: number, cols: number, matrix: Array<Array<number>>): Array<Array<number>> {
    const paths: Array<Array<number>> = [];
    findPaths(0, 0, [], paths, rows, cols, matrix);

    return paths;
  }
```

## Ejercicio 9 - Operaciones con listas

En este ejercicio debemos desarrollar diferentes funciones para operar con listas, sin hacer uso de las funciones de los arrays en `Array.prototype`. Las funciones que se piden son `append`, `concatenate`, `filter`, `length`, `map`, `reduce` y `reverse`.

#### Función `append`

La función `append` toma dos listas como entrada y devuelve una nueva lista que contiene todos los elementos de ambas listas. Utiliza el operador de propagación (`...`) para unir las dos listas de manera eficiente.

```typescript
  export function append(list1: Array<any>, list2: Array<any>): Array<any> {
    return [...list1, ...list2];
  }
```

#### Función `concatenate`

La función `concatenate` recibe un array de listas como entrada y devuelve una nueva lista que contiene todos los elementos de todas las listas. Itera sobre cada lista en el array de listas y utiliza la función `append` para agregar los elementos de cada lista a una lista más grande (`bigList`). Finalmente, devuelve la lista concatenada resultante.

```typescript
  export function concatenate(listas: Array<Array<any>>): Array<any> {
    let bigList: Array<any> = [];
    for (const lista of listas) {
      bigList = append(bigList, lista);
    }
    return bigList;
  }
```

#### Función `filter`

La función `filter` recibe una función de predicado `pred` y una lista `lista` como entrada, y devuelve una nueva lista que contiene solo los elementos de la lista original para los cuales el predicado devuelve `true`. Itera sobre cada elemento en la lista y utiliza el predicado para determinar si el elemento debe incluirse en la nueva lista.

```typescript
  export function filter(pred: (item: any) => boolean, lista: Array<any>): Array<any> {
    let goodList: Array<any> = [];
    for (const element of lista) {
      if (pred(element)) { 
        goodList = append(goodList, [element]);
      }
    }
    return goodList;
  }
```

#### Función `length`

La función `length` toma una lista como entrada y devuelve la longitud de la lista. Itera sobre cada elemento de la lista y cuenta el número total de elementos.

```typescript
  export function length(list: Array<any>): number {
    let count: number = 0;
    for (const element in list) {
      count++;
    }
    return count;
  }
```

#### Función `map`

La función `map` recibe una función `func` y una lista `lista` como entrada, y devuelve una nueva lista que contiene los resultados de aplicar la función a cada elemento de la lista original. Itera sobre cada elemento en la lista y aplica la función a ese elemento, agregando el resultado a la nueva lista.

```typescript
  export function map(func: (item: any) => any, lista: Array<any>): Array<any> {
    let result: Array<any> = [];
    for (const element of lista) {
      result = append(result, [func(element)]);
    }
    return result;
  }
```

#### Función `reduce`

La función `reduce` recibe una función de reducción `func`, una lista `lista` y un valor inicial de acumulador `accum` como entrada, y reduce cada elemento de la lista en el acumulador desde la izquierda. Itera sobre cada elemento en la lista y aplica la función de reducción al acumulador y al elemento actual.

```typescript
  export function reduce(func: (accum: any, item: any) => any, lista: Array<any>, accum: any): any {
    for (const element of lista) {
      accum = func(accum, element);
    }
    return accum;
  }
```

#### Función `reverse`

La función `reverse` toma una lista como entrada y devuelve una nueva lista con los elementos en orden inverso. Itera sobre la lista original desde el último elemento hasta el primero y agrega cada elemento a una nueva lista, creando así una lista con los elementos en orden inverso.

```typescript
  export function reverse(lista: Array<any>): Array<any> {
    let reverseList: Array<any> = [];
    for (let index = length(lista) - 1; index >= 0; index--) {
      reverseList = append(reverseList, [lista[index]]);
    }
    return reverseList;
  }
```

## Ejercicio 10 - Menús saludables

En este ejercicio, debemos implementar varias funciones para crear listas que correspondan a menús, acorde a los valores nutricionales y de insalubridad de los diferentes platos disponibles. Tendremos que hacerlo bajo tres heurísticas diferentes: maximizando valor nutricional, minimizando insalubridad y maximizando el ratio de valor nutricional e insalubridad. Para ello se han descrito las siguientes funciones: `sortByNutriScoreDescending`, `sortByUnhealthyScoreAscending`, `sortByRatioDescending` y `selectMenu`. También se ha descrito el tipo de dato `Dish`.

#### Tipo de dato `Dish`

El tipo de dato `Dish` representa un plato y se define como un array con dos elementos: el primer elemento es el valor nutricional y el segundo elemento es el grado de insalubridad del plato.

```typescript
  export type Dish = [nutriScore: number, unhealthyScore: number];
```

#### Función `sortByNutriScoreDescending`

La función `sortByNutriScoreDescending` toma una lista de platos como entrada y devuelve una nueva lista de platos ordenada de manera decreciente según su valor nutricional. Utiliza el método `sort()` con una función de comparación que ordena los platos según el valor nutricional en orden descendente.

```typescript
  export function sortByNutriScoreDescending(dishes: Dish[]): Dish[] {
    return [...dishes].sort((a, b) => b[0] - a[0]);
  }
```

#### Función `sortByUnhealthyScoreAscending`

La función `sortByUnhealthyScoreAscending` toma una lista de platos como entrada y devuelve una nueva lista de platos ordenada de manera creciente según su grado de insalubridad. Utiliza el método `sort()` con una función de comparación que ordena los platos según el grado de insalubridad en orden ascendente.

```typescript
  export function sortByUnhealthyScoreAscending(dishes: Dish[]): Dish[] {
      return [...dishes].sort((a, b) => a[1] - b[1]);
  }
```

#### Función `sortByRatioDescending`

La función `sortByRatioDescending` toma una lista de platos como entrada y devuelve una nueva lista de platos ordenada de manera decreciente según el ratio valor nutricional / grado de insalubridad. Utiliza el método `sort()` con una función de comparación que ordena los platos según este ratio en orden descendente.

```typescript
  export function sortByRatioDescending(dishes: Array<Dish>): Array<Dish> {
    return dishes.sort((a, b) => (b[0] / b[1]) - (a[0] / a[1]));
  }
```

#### Función `selectMenu`

La función `selectMenu` selecciona los platos que maximizan el valor nutricional dentro del límite de insalubridad especificado. Toma una lista de platos y un grado de insalubridad máximo permitido como entrada, y devuelve una lista de platos seleccionados. Itera sobre la lista de platos y agrega cada plato al menú seleccionado si el grado de insalubridad actual más el grado de insalubridad del plato no excede el límite especificado.

```typescript
  export function selectMenu(dishes: Dish[], maxUnhealthyScore: number): Dish[] {
    let menu: Dish[] = [];
    let currentUnhealthyScore = 0;
    
    for (const dish of dishes) {
        if (currentUnhealthyScore + dish[1] <= maxUnhealthyScore) {
            menu.push(dish);
            currentUnhealthyScore += dish[1];
        } else {
            break;
        }
    }
    
    return menu;
  }
```
