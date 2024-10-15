import 'mocha';
import {expect} from 'chai';
import {factorizarBase2, fromIntToActions} from '../src/ejercicio-2';

describe('Ejercicio 2', () => {

  describe('Pruebas unitarias de fromIntToActions y componentes', () => {

    describe('factorizarBase2 funciona correctamente', () => {
      const num1 = 192;
      const arr1 = [128, 64];
      
      const num2 = 515;
      const arr2 = [512, 2, 1];
  
      it('192 is 64 + 128', () => {
        expect(factorizarBase2(num1)).to.deep.equal(arr1);
      });
      
      it('515 is 512 + 2 + 1', () => {
        expect(factorizarBase2(num2)).to.deep.equal(arr2);
      });
    });
  
    describe('fromIntToActions funciona correctamente', () => {
      const num1 = 192;
      const arr1 = ['Agacharse', 'Dar un aplauso'];
  
      const num2 = 515;
      const arr2 = ['Parpadear', 'Parpadear dos veces'];    
    
      it('192 is agacharse y dar un aplauso', () => {
        expect(fromIntToActions(num1)).to.deep.equal(arr1);
      });
      
      it('515 is parpadear, parpadear dos veces', () => {
        expect(fromIntToActions(num2)).to.deep.equal(arr2);
      });
    });
  
    describe('factorizarBase2 previene errores correctamente', () => {
      it('Debe lanzar un error si se le pasa un número negativo', () => {
        expect(() => factorizarBase2(-10)).to.throw('El argumento debe ser un número entero positivo.');
      });
  
      it('Debe lanzar un error si se le pasa un número decimal', () => {
        expect(() => factorizarBase2(5.5)).to.throw('El argumento debe ser un número entero positivo.');
      });
    });
  
    describe('fromIntToActions previene errores correctamente', () => {
      it('Debe devolver undefined si se le pasa un numero negativo', () => {
        expect(fromIntToActions(-10)).to.deep.equal(undefined);
      });
  
      it('Debe lanzar un error si se le pasa un número decimal', () => {
        expect(() => fromIntToActions(5.5)).to.throw('El argumento debe ser un número entero positivo.');
      });
    });
  });

});