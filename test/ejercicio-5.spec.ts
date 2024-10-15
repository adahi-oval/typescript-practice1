import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejercicio-5';

describe('Ejercicio 5', () => {
  describe('productTable', () => {
    it('Debería retornar una tabla de productos correctamente para num = 3', () => {
      const num = 3;
      const expectedTable = [
        [1, 2, 3],
        [2, 4, 6],
        [3, 6, 9]
      ];
      expect(productTable(num)).to.deep.equal(expectedTable);
    });
  
    it('Debería retornar una tabla de productos correctamente para num = 5', () => {
      const num = 5;
      const expectedTable = [
        [1, 2, 3, 4, 5],
        [2, 4, 6, 8, 10],
        [3, 6, 9, 12, 15],
        [4, 8, 12, 16, 20],
        [5, 10, 15, 20, 25]
      ];
      expect(productTable(num)).to.deep.equal(expectedTable);
    });
  
    it('Debería retornar undefined para num = 0', () => {
      const num = 0;
      expect(productTable(num)).to.be.undefined;
    });
  
    it('Debería retornar undefined para num negativo', () => {
      const num = -3;
      expect(productTable(num)).to.be.undefined;
    });
  });
});