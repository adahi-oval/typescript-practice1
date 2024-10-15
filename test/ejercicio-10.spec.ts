import 'mocha';
import {expect} from 'chai';
import {sortByNutriScoreDescending, sortByUnhealthyScoreAscending, selectMenu, Dish, sortByRatioDescending} from '../src/ejercicio-10';

describe('Ejercicio 10', () => {

  describe('Pruebas para sortByNutriScoreDescending', () => {
    it('Debería ordenar los platos por valor nutricional de manera decreciente', () => {
      const dishes: Dish[] = [
        [10, 5],
        [8, 3],
        [12, 7]
      ];
      const sortedDishes = sortByNutriScoreDescending(dishes);
      expect(sortedDishes).to.deep.equal([
        [12, 7],
        [10, 5],
        [8, 3]
      ]);
    });
  });
  
  describe('Pruebas para sortByUnhealthyScoreAscending', () => {
    it('Debería ordenar los platos por grado de insalubridad de manera creciente', () => {
      const dishes: Dish[] = [
        [10, 5],
        [8, 3],
        [12, 7]
      ];
      const sortedDishes = sortByUnhealthyScoreAscending(dishes);
      expect(sortedDishes).to.deep.equal([
        [8, 3],
        [10, 5],
        [12, 7]
      ]);
    });
  });
  
  describe('Pruebas para sortByRatioDescending', () => {
    it('Debería ordenar los platos por ratio valor nutricional / grado de insalubridad de manera decreciente', () => {
      const dishes: Dish[] = [
        [10, 5],
        [8, 3],
        [12, 7]
      ];
      const sortedDishes = sortByRatioDescending(dishes);
      expect(sortedDishes).to.deep.equal([
        [8, 3],
        [10, 5],
        [12, 7]
      ]);
    });
  });
  
  describe('Pruebas para selectMenu', () => {
    it('Debería crear el menú metiendo los platos de mayor valor nutricional primero', () => {
      const dishes: Dish[] = [
        [10, 5],
        [8, 3],
        [12, 7]
      ];
      const maxUnhealthyScore = 8;
      const selectedMenu = selectMenu(sortByNutriScoreDescending(dishes), maxUnhealthyScore);
      expect(selectedMenu).to.deep.equal([
        [12, 7]
      ]);
    });
  
    it('Debería crear el menú metiendo los platos de menor unhealthyScore primero.', () => {
      const dishes: Dish[] = [
        [10, 5],
        [8, 3],
        [12, 7]
      ];
      const maxUnhealthyScore = 8;
      const selectedMenu = selectMenu(sortByUnhealthyScoreAscending(dishes), maxUnhealthyScore);
      expect(selectedMenu).to.deep.equal([
        [8, 3],
        [10, 5]
      ]);
    });
  
    it('Debería crear el menú metiendo los platos con mayor ratio primero.', () => {
      const dishes: Dish[] = [
        [10, 5],
        [8, 3],
        [12, 7]
      ];
      const maxUnhealthyScore = 8;
      const selectedMenu = selectMenu(sortByRatioDescending(dishes), maxUnhealthyScore);
      expect(selectedMenu).to.deep.equal([
        [8, 3],
        [10, 5]
      ]);
    });
  });
  
});