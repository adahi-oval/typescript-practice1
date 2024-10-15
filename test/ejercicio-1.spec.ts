import 'mocha';
import {expect} from 'chai';
import {abs, Rational, inv, mcd, mcm, add, sub, mult, div} from '../src/ejercicio-1';

describe('Ejercicio 1', () => {
  describe('abs, inv, mcd and mcm tests', () => {
    
    let rat1: Rational = {
      num: -1,
      denom: 3
    };

    let rat1Abs: Rational = {
      num: 1,
      denom: 3
    };

    beforeEach(() => {
      rat1.num = -1;
      rat1.denom = 3;
      rat1Abs.num = 1;
      rat1Abs.denom = 3;
    });

    it('abs and inv exist', () => {
      expect(abs(rat1)).to.exist
      expect(inv(rat1)).to.exist
    })

    it('abs(rat1) returns 1/3', () => {
      expect(abs(rat1).num).to.equal(rat1Abs.num);
      expect(abs(rat1).denom).to.equal(rat1Abs.denom);
    })

    it('inv(rat1) returns -1/3', () => {
      expect(inv(rat1).num).to.equal(rat1.denom);
      expect(inv(rat1).denom).to.equal(rat1.num);
    })

    it('mcd of 20 and 15 is 5', () => {
      expect(mcd(20,15)).to.equal(5);
    })

    it('mcm of 6 and 9 is 18', () => {
      expect(mcm(9,6)).to.equal(18);
    })

  });

  describe('add, sub, mult and div tests', () => {

    describe('Suma de números racionales', () => {
      it('Debe sumar dos números racionales correctamente', () => {
        const rational1 = { num: 1, denom: 2 };
        const rational2 = { num: 1, denom: 3 };
        const resultado = add(rational1, rational2);
        expect(resultado).to.deep.equal({ num: 5, denom: 6 });
      });
    });

    describe('Resta de números racionales', () => {
      it('Debe restar dos números racionales correctamente', () => {
        const rational1 = { num: 1, denom: 2 };
        const rational2 = { num: 1, denom: 3 };
        const resultado = sub(rational1, rational2);
        expect(resultado).to.deep.equal({ num: 1, denom: 6 });
      });
    });

    describe('Multiplicación de números racionales', () => {
      it('Debe multiplicar dos números racionales correctamente', () => {
        const rational1 = { num: 1, denom: 2 };
        const rational2 = { num: 1, denom: 3 };
        const resultado = mult(rational1, rational2);
        expect(resultado).to.deep.equal({ num: 1, denom: 6 });
      });
    });

    describe('División de números racionales', () => {
      it('Debe dividir dos números racionales correctamente', () => {
        const rational1 = { num: 1, denom: 2 };
        const rational2 = { num: 1, denom: 3 };
        const resultado = div(rational1, rational2);
        expect(resultado).to.deep.equal({ num: 3, denom: 2 });
      });
    });

    describe('Pruebas de errores', () => {
      it('Debería lanzar un error si el denominador es cero', () => {
        const rational1 = { num: 1, denom: 2 };
        const rational2 = { num: 1, denom: 0 };
        expect(() => add(rational1, rational2)).to.throw('Error: El denominador no puede ser cero.');
        expect(() => sub(rational1, rational2)).to.throw('Error: El denominador no puede ser cero.');
        expect(() => mult(rational1, rational2)).to.throw('Error: El denominador no puede ser cero.');
        expect(() => div(rational1, rational2)).to.throw('Error: El denominador no puede ser cero.');
      });
    });

  });
});