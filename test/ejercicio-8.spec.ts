import 'mocha';
import {expect} from 'chai';
import {findPaths, getPaths} from '../src/ejercicio-8';

describe('Ejercicio 8', () => {

  describe('findPaths', () => {
    it('debería devolver una lista de todos los caminos posibles en una matriz 2x2', () => {
      const matrix = [
        [0, 1],
        [2, 3]
      ];
      const expectedPaths = [
        [0, 2, 3],
        [0, 1, 3]
      ];
      const paths: Array<Array<number>> = [];
      findPaths(0, 0, [], paths, 2, 2, matrix);
      expect(paths).to.deep.include.members(expectedPaths);
    });

    it('debería devolver una lista de todos los caminos posibles en una matriz 3x3', () => {
      const matrix = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ];
      const expectedPaths = [
        [0, 3, 6, 7, 8],
        [0, 3, 4, 7, 8],
        [0, 1, 4, 7, 8],
        [0, 1, 4, 5, 8],
        [0, 1, 2, 5, 8],
        [0, 3, 4, 5, 8]
      ];
      const paths: Array<Array<number>> = [];
      findPaths(0, 0, [], paths, 3, 3, matrix);
      expect(paths).to.deep.include.members(expectedPaths);
    });
  });

  describe('getPaths', () => {
    it('debería devolver una lista de todos los caminos posibles en una matriz 2x2', () => {
      const matrix = [
        [0, 1],
        [2, 3]
      ];
      const expectedPaths = [
        [0, 2, 3],
        [0, 1, 3]
      ];
      const paths = getPaths(2, 2, matrix);
      expect(paths).to.deep.include.members(expectedPaths);
    });

    it('debería devolver una lista de todos los caminos posibles en una matriz 3x3', () => {
      const matrix = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ];
      const expectedPaths = [
        [0, 3, 6, 7, 8],
        [0, 3, 4, 7, 8],
        [0, 1, 4, 7, 8],
        [0, 1, 4, 5, 8],
        [0, 1, 2, 5, 8],
        [0, 3, 4, 5, 8]
      ];
      const paths = getPaths(3, 3, matrix);
      expect(paths).to.deep.include.members(expectedPaths);
    });
  });

});