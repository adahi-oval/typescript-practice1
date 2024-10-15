import 'mocha';
import {expect} from 'chai';
import {doesItGoBack, getCartesianPath} from '../src/ejercicio-7';

describe('Ejercicio 7', () => {

  describe('doesItGoBack', () => {
    it('debería devolver true si se vuelve', () => {
      const direcciones1 = ['n', 's', 'e', 'o'];
      const direcciones2 = ['n', 'n', 's', 's', 'e', 'e', 'o', 'o'];
      const direcciones3 = ['e', 's', 'e', 's', 's', 'o', 'o', 'n', 'n', 'n'];

      expect(doesItGoBack(direcciones1)).to.be.true;
      expect(doesItGoBack(direcciones2)).to.be.true;
      expect(doesItGoBack(direcciones3)).to.be.true;
    });

    it('debería devolver false si no se vuelve', () => {
      const direcciones1 = ['n', 's', 'e'];
      const direcciones2 = ['n', 'n', 's', 'e', 'e', 'o'];
      const direcciones3 = ['e', 's', 'e', 's', 's', 'o', 'o', 'n', 'n'];

      expect(doesItGoBack(direcciones1)).to.be.false;
      expect(doesItGoBack(direcciones2)).to.be.false;
      expect(doesItGoBack(direcciones3)).to.be.false;
    });

    it('debería devolver undefined para un array vacío', () => {
      const direcciones = [];

      expect(doesItGoBack(direcciones)).to.be.undefined;
    });
  });

  describe('getCartesianPath', () => {
    it('debería devolver true si la longitud del camino es menor o igual al tiempo', () => {
      const direcciones = ['n', 's', 'e', 'o'];
      const tiempo = 4;

      expect(getCartesianPath(direcciones, tiempo)).to.be.true;
    });

    it('debería devolver false si la longitud del camino es mayor que el tiempo', () => {
      const direcciones = ['n', 's', 'e', 'o'];
      const tiempo = 3;

      expect(getCartesianPath(direcciones, tiempo)).to.be.false;
    });

    it('debería devolver undefined si el array de direcciones está vacío o no se devuelve', () => {
      const direccionesVacias = [];
      const direccionesNoVuelta = ['n', 's', 'e'];

      expect(getCartesianPath(direccionesVacias, 5)).to.be.undefined;
      expect(getCartesianPath(direccionesNoVuelta, 5)).to.be.undefined;
    });
  });

});