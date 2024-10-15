import 'mocha';
import {expect} from 'chai';
import {multiplosMenores, getPoints} from '../src/ejercicio-4';

describe('Ejercicio 4', () => {

  describe('multiplosMenores', () => {
    it('debería devolver los múltiplos de base menores que num', () => {
      expect(multiplosMenores(2, 10)).to.deep.equal([2, 4, 6, 8]); // Múltiplos de 2 menores que 10: 0, 2, 4, 6, 8
      expect(multiplosMenores(3, 12)).to.deep.equal([3, 6, 9]); // Múltiplos de 3 menores que 12: 0, 3, 6, 9
      expect(multiplosMenores(5, 20)).to.deep.equal([5, 10, 15]); // Múltiplos de 5 menores que 20: 0, 5, 10, 15
    });
  
    it('debería devolver undefined si no hay múltiplos de base menores que num', () => {
      expect(multiplosMenores(2, 1)).to.be.undefined; // No hay múltiplos de 2 menores que 1
      expect(multiplosMenores(10, 5)).to.be.undefined; // No hay múltiplos de 10 menores que 5
    });
  
    it('debería devolver undefined si alguno de los argumentos no es un número entero positivo', () => {
      expect(multiplosMenores(2, -10)).to.be.undefined;
      expect(multiplosMenores(2.5, 10)).to.be.undefined;
      expect(multiplosMenores(-2, 10)).to.be.undefined;
    });
  });
  
  describe('getPoints', () => {
    it('debería devolver la suma correcta de puntos', () => {
      const objetos = [2, 3, 7];
      const fase = 25;
      const sumaEsperada = 211;
      const resultado = getPoints(objetos, fase);
      expect(resultado).to.equal(sumaEsperada);
    });
  });
  
  describe('getPoints - Casos de entrada inválidos', () => {
    it('debería devolver undefined si objetos contiene números negativos', () => {
      const objetos = [-1, 3, 5];
      const fase = 20;
      const resultado = getPoints(objetos, fase);
      expect(resultado).to.be.undefined;
    });
  
    it('debería devolver undefined si fase es un número negativo', () => {
      const objetos = [2, 3, 5];
      const fase = -20;
      const resultado = getPoints(objetos, fase);
      expect(resultado).to.be.undefined;
    });
  
    it('debería devolver undefined si fase es menor que el objeto más grande', () => {
      const objetos = [2, 3, 5];
      const fase = 1;
      const resultado = getPoints(objetos, fase);
      expect(resultado).to.be.undefined;
    });
  });
  
  

});