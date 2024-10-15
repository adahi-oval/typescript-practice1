import 'mocha';
import {expect} from 'chai';
import {splitLetters, getScore} from '../src/ejercicio-3';

describe('Ejercicio 3', () => {
  describe('splitLetters funciona correctamente', () => {
    it('debería separar las letras correctamente', () => {
        const word = "ángulo";
        const resultadoEsperado = ['A', 'N', 'G', 'U', 'L', 'O'];

        expect(splitLetters(word)).to.deep.equal(resultadoEsperado);
    });

    it('debería manejar las letras con acentos y LL correctamente', () => {
        const word = "lápiz";
        const resultadoEsperado = ['L', 'A', 'P', 'I', 'Z'];

        expect(splitLetters(word)).to.deep.equal(resultadoEsperado);
    });

    it('debería manejar correctamente la doble L', () => {
        const word = "Llave";
        const resultadoEsperado = ['LL', 'A', 'V', 'E'];

        expect(splitLetters(word)).to.deep.equal(resultadoEsperado);
    });
  });

  describe('getScore funciona correctamente', () => {
      it('debería calcular correctamente los puntajes de las palabras', () => {
          const palabras = ["ángulo", "lápiz", "llave"];
          const resultadoEsperado = [7, 16, 14]; // 7 para 'ángulo', 15 para 'lápiz', 8 para 'llave'

          expect(getScore(palabras)).to.deep.equal(resultadoEsperado);
      });

      it('debería devolver undefined para palabras con letras desconocidas', () => {
          const palabras = ["ángulo", "lápiz", "llave", "kilo"];
          const resultadoEsperado = [7, 16, 14, undefined]; // 'kilo' contiene una letra desconocida

          expect(getScore(palabras)).to.deep.equal(resultadoEsperado);
      });
  });
});