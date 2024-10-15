import 'mocha';
import {expect} from 'chai';
import {append, concatenate, filter, length, map, reduce, reverse} from '../src/ejercicio-9';

describe('Ejercicio 9', () => {
  
  describe('Pruebas para append', () => {
    it('Debería unir dos listas correctamente', () => {
      const lista1 = [1, 2, 3];
      const lista2 = ['a', 'b', 'c'];
      const resultado = append(lista1, lista2);

      // Verifica que el resultado sea la concatenación correcta de las dos listas
      expect(resultado).to.deep.equal([1, 2, 3, 'a', 'b', 'c']);
    });
  });

  describe('Pruebas para concatenate', () => {
    it('Debería concatenar varias listas correctamente', () => {
      const lista1 = [1, 2, 3];
      const lista2 = ['a', 'b', 'c'];
      const lista3 = ['x', 'y', 'z'];
      const lista4 = [true, false];
      const listas = [lista1, lista2, lista3, lista4];

      const resultado = concatenate(listas);

      // Verifica que el resultado sea la concatenación correcta de todas las listas
      expect(resultado).to.deep.equal([1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z', true, false]);
    });

    it('Debería retornar una lista vacía si no se pasa ninguna lista', () => {
      const resultado = concatenate([]);

      // Verifica que el resultado sea una lista vacía
      expect(resultado).to.be.an('array').that.is.empty;
    });
  });

  describe('Pruebas para filter', () => {
    it('Debería filtrar elementos según el predicado dado', () => {
      // Creamos una lista de números del 1 al 10
      const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
      // Filtramos los números pares usando el predicado
      const resultado = filter((num: number) => num % 2 === 0, numeros);
  
      // Verificamos que los números pares hayan sido filtrados correctamente
      expect(resultado).to.deep.equal([2, 4, 6, 8, 10]);
    });
  
    it('Debería retornar una lista vacía si no hay elementos que cumplan el predicado', () => {
      // Creamos una lista de números del 1 al 10
      const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
      // Filtramos usando el predicado falso
      const resultado = filter(() => false, numeros);
  
      // Verificamos que el resultado sea una lista vacía
      expect(resultado).to.be.an('array').that.is.empty;
    });
  
    it('Debería retornar una lista vacía si la lista de entrada está vacía', () => {

      // Creamos una lista vacía
      const listaVacia: number[] = [];
  
      // Filtramos usando el predicado verdadero
      const resultado = filter(() => true, listaVacia);
  
      // Verificamos que el resultado sea una lista vacía
      expect(resultado).to.be.an('array').that.is.empty;
    });
  });

  describe('Pruebas para length', () => {
    it('Debería retornar la longitud correcta de un array no vacío', () => {
      const lista = [1, 2, 3, 4, 5];
      const resultado = length(lista);
  
      // Verifica que el resultado sea la longitud correcta del array
      expect(resultado).to.equal(5);
    });
  
    it('Debería retornar 0 para un array vacío', () => {
      const lista = [];
      const resultado = length(lista);
  
      // Verifica que el resultado sea 0
      expect(resultado).to.equal(0);
    });
  
    it('Debería retornar la longitud correcta de un array de strings', () => {
      const lista = ['a', 'b', 'c', 'd'];
      const resultado = length(lista);
  
      // Verifica que el resultado sea la longitud correcta del array de strings
      expect(resultado).to.equal(4);
    });
  
    it('Debería retornar la longitud correcta de un array con elementos mixtos', () => {
      const lista = [1, 'a', true, null];
      const resultado = length(lista);
  
      // Verifica que el resultado sea la longitud correcta del array mixto
      expect(resultado).to.equal(4);
    });
  });

  describe('Pruebas para map', () => {
    it('Debería aplicar la función a cada elemento de la lista', () => {
      const lista = [1, 2, 3, 4];
  
      const resultado = map((x: number) => x * 2, lista);
  
      expect(resultado).to.deep.equal([2, 4, 6, 8]);
    });
  
    it('Debería retornar una lista vacía si se pasa una lista vacía', () => {
      const lista: number[] = [];
  
      const resultado = map((x: number) => x * 2, lista);
  
      expect(resultado).to.be.an('array').that.is.empty;
    });
  });

  describe('Pruebas para reduce', () => {
    it('Debería reducir la lista correctamente', () => {
      const lista = [1, 2, 3, 4];
  
      const resultado = reduce((accum: number, item: number) => accum + item, lista, 0);
  
      expect(resultado).to.equal(10);
    });
  
    it('Debería retornar el acumulador inicial si la lista está vacía', () => {
      const lista: number[] = [];
  
      const resultado = reduce((accum: number, item: number) => accum + item, lista, 10);
  
      expect(resultado).to.equal(10);
    });
  
    it('Debería funcionar correctamente con una función que no modifica el acumulador', () => {
      const lista = ['a', 'b', 'c'];
  
      const resultado = reduce((accum: string, item: string) => accum + item, lista, '');
  
      expect(resultado).to.equal('abc');
    });
  });

  describe('Pruebas para reverse', () => {
    it('Debería devolver la lista en orden inverso', () => {
      const lista = [1, 2, 3, 4];
      const resultado = reverse(lista);
      expect(resultado).to.deep.equal([4, 3, 2, 1]);
    });
  
    it('Debería devolver una lista vacía si se pasa una lista vacía', () => {
      const lista: number[] = [];
      const resultado = reverse(lista);
      expect(resultado).to.deep.equal([]);
    });
  
    it('Debería devolver la misma lista si se pasa una lista de un solo elemento', () => {
      const lista = ['a'];
      const resultado = reverse(lista);
      expect(resultado).to.deep.equal(['a']);
    });
  });

});