import 'mocha';
import { expect } from 'chai';
import { multiplyAll } from '../src/ejercicio-6';

describe('Ejercicio 6', () => {

  describe('multiplyAll', () => {
    it('debería devolver una función que multiplica cada elemento del array por el valor dado', () => {
        const multiplicarPor2 = multiplyAll([1, 2, 3]);
        expect(multiplicarPor2).to.be.a('function');

        const resultado1 = multiplicarPor2(2);
        expect(resultado1).to.deep.equal([2, 4, 6]);

        const resultado2 = multiplicarPor2(3);
        expect(resultado2).to.deep.equal([3, 6, 9]);
    });

    it('debería devolver un array vacío si el array de entrada está vacío', () => {
        const multiplicarVacio = multiplyAll([]);
        expect(multiplicarVacio).to.be.a('function');

        const resultado = multiplicarVacio(5);
        expect(resultado).to.deep.equal([]);
    });

    it('debería devolver un array con ceros si el array de entrada contiene ceros', () => {
        const multiplicarPor0 = multiplyAll([0, 0, 0]);
        expect(multiplicarPor0).to.be.a('function');

        const resultado = multiplicarPor0(5);
        expect(resultado).to.deep.equal([0, 0, 0]);
    });

    it('debería devolver un array con valores negativos si el array de entrada contiene números negativos', () => {
        const multiplicarPorNegativo = multiplyAll([-1, -2, -3]);
        expect(multiplicarPorNegativo).to.be.a('function');

        const resultado = multiplicarPorNegativo(2);
        expect(resultado).to.deep.equal([-2, -4, -6]);
    });

    it('debería devolver un array con valores decimales si el array de entrada contiene números decimales', () => {
        const multiplicarPorDecimal = multiplyAll([1.5, 2.5, 3.5]);
        expect(multiplicarPorDecimal).to.be.a('function');

        const resultado = multiplicarPorDecimal(2);
        expect(resultado).to.deep.equal([3, 5, 7]);
    });
  });

});