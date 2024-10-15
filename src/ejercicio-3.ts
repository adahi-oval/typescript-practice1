/**
 * Divide una palabra en sus letras individuales, maneja letras con acentos y la doble 'LL'.
 * @param word - La palabra a dividir en letras.
 * @returns Un array con las letras de la palabra, sin acentos y con la doble 'LL' representada como una sola letra.
 */
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

/**
 * Calcula el puntaje para cada palabra basado en las puntuaciones de las letras.
 * @param words - Un array de palabras para calcular los puntajes.
 * @returns Un array con los puntajes correspondientes a cada palabra. Si una palabra contiene letras desconocidas, el puntaje correspondiente será 'undefined'.
 */
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