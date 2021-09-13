# Introducción a NodeJS

## Requisitos y entrega


1. Realiza un fork del repositorio `github.com/curso-backend-web/intro-node.git`
2. Clona el repositorio a tu PC desde **TÚ USUARIO**
3. Realiza el ejercicio, en este caso practicarás con objetos y clases.

4. Una vez completado lanza los siguientes comandos:

```
git add .
git commit -m "done"
git push

```

- Desde el repositorio [crea un Pull Request](https://help.github.com/articles/creating-a-pull-request/) con el nombre de la pareja en el subject del mensaje y el texto EJERCICIO COMPLETADO.

## Testing

Este ejercicio se ha de completar mediante tests. Para los que no hayan tenido oportunidad de practicar con ellos, se acompaña una breve introducción al testing.

### Qué es el testing

El testing es un proceso por el cual se ejecuta una aplicación para validar y verificar que se cumplen todos los requisitos técnicos, de negocio y de funcionamiento de un software.

El testing es un proceso, no una única actividad. Por tanto, el diseño de tests durante las fases iniciales del desarrollo de un producto puede ayudar a prevenir deficiencias en el código o en el propio diseño del producto.

En este ejercicio, se han creaado todos los test necesarios para obtener la solución, y se han de ejecutar todos ellos para construir el código que cumpla con los requisitos.

Los tests probarán que el código funciona en cualquier situación en las que se prevé que lo haga. También nos servirá para el diseño o la implementación de nuevas funcionalidades, de manera que los cambios que se hagan al código no rompan lo que ya está funcionando.

### Testing con Jest

![]()

<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMTQuMSAzNDUuNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0ibm9uZSIgZD0ibTIwNy42IDk1LjYtMjAuNyA0MS44YzYuOCA2LjMgMTEuNiAxNC42IDEzLjUgMjRIMjE2YzEuOC04LjkgNi4yLTE2LjkgMTIuNS0yMy4xbC0yMC45LTQyLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0ibTE2OS41IDEyNy4zIDM4LjEtNzcgMzggNzcuNWMxLjUtLjUgMy0uOSA0LjUtMS4zTDI4Ni4yIDIwSDEyOC45bDM2IDEwNi4yYzEuNS4zIDMuMS43IDQuNiAxLjF6TTE1Ni40IDE5NS40YzEzLjkgMCAyNS4yLTExLjMgMjUuMi0yNS4yIDAtNS4xLTEuNS05LjgtNC4xLTEzLjgtLjgtMS4zLTEuOC0yLjUtMi44LTMuNmwtLjEtLjFjLTEtMS4xLTIuMi0yLjEtMy40LTIuOWwtLjEtLjFjLS4zLS4yLS43LS41LTEuMS0uNy0uMSAwLS4xLS4xLS4yLS4xLS40LS4yLS44LS41LTEuMi0uN2gtLjFjLS40LS4yLS45LS41LTEuMy0uN2gtLjFjLS40LS4yLS44LS40LTEuMi0uNS0uMSAwLS4yLS4xLS4zLS4xLS4zLS4xLS43LS4zLTEtLjQtLjEgMC0uMi0uMS0uNC0uMS0uNC0uMS0uOC0uMy0xLjItLjRoLS4xYy0uNS0uMS0uOS0uMi0xLjQtLjMtLjEgMC0uMiAwLS40LS4xLS40LS4xLS43LS4xLTEuMS0uMi0uMiAwLS4zIDAtLjUtLjEtLjMgMC0uNy0uMS0xLS4xaC0zLjljLS40IDAtLjcuMS0xLjEuMWgtLjRjLS40LjEtLjguMS0xLjIuMmgtLjNjLS41LjEtLjkuMi0xLjQuMy0xMSAyLjctMTkuMiAxMi43LTE5LjIgMjQuNS4yIDEzLjcgMTEuNSAyNS4xIDI1LjQgMjUuMXpNMjYyLjQgMTQ1aC0uMmMtLjQgMC0uNy0uMS0xLjEtLjFoLTEuM2MtLjUgMC0xIDAtMS42LjFoLS41Yy0uNCAwLS44LjEtMS4yLjEtLjEgMC0uMyAwLS40LjFsLTEuNS4zaC0uMWMtLjUuMS0uOS4yLTEuNC4zLS4xIDAtLjMuMS0uNC4xLS40LjEtLjguMi0xLjIuNC0uMSAwLS4yLjEtLjMuMS0uNS4yLTEgLjQtMS40LjYtLjUuMi0uOS40LTEuNC42LS4xIDAtLjIuMS0uMy4xLS40LjItLjguNC0xLjIuNyAwIDAtLjEgMC0uMS4xLS45LjUtMS44IDEuMS0yLjYgMS44bC0uMS4xYy0xLjMgMS0yLjQgMi4xLTMuNSAzLjMtMS4xIDEuMi0yIDIuNi0yLjggNC0yLjEgMy43LTMuMyA4LTMuMyAxMi41IDAgMTMuOSAxMS4zIDI1LjIgMjUuMiAyNS4yIDEzLjkgMCAyNS4yLTExLjMgMjUuMi0yNS4yIDAtMTIuMi04LjgtMjIuNS0yMC4zLTI0LjgtLjYtLjItMS40LS4zLTIuMi0uNHpNNTEuOSAxOTUuNGMxMy45IDAgMjUuMi0xMS4zIDI1LjItMjUuMlM2NS44IDE0NSA1MS45IDE0NXMtMjUuMiAxMS4zLTI1LjIgMjUuMiAxMS4zIDI1LjIgMjUuMiAyNS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0yNTkuOSAyMTQuOWMtMjAuOCAwLTM4LjMtMTQuMy00My4zLTMzLjVoLTE2LjhjLTUgMTkuMi0yMi41IDMzLjUtNDMuMyAzMy41LTIuNCAwLTQuNy0uMi02LjktLjUtNS44IDguOS0xMi43IDE3LjEtMjAuOCAyNC43LTE0LjMgMTMuNS0zMC41IDIzLjUtNDggMjkuOGwtNC4xIDEuNS0zLjgtMmMtMjEtMTAuOC0zMS44LTMyLjctMjgtNTMuOS0yLjQtLjQtNC43LTEtNi45LTEuOC0uNC43LS43IDEuNS0xLjEgMi4zLTYuNCAxMy4yLTEzLjEgMjYuOC0xNS41IDQxLjQtMi42IDE1LjYtMy43IDQ0LjEgMTguMyA1OS4zIDkuNiA2LjYgMTkuNyA5LjkgMzEgOS45IDIxLjcgMCA0NS4xLTExLjYgNjkuOS0yMy45IDE5LjQtOS42IDM5LjQtMTkuNiA2MC4yLTI0LjcgNy45LTEuOSAxNS45LTMuMSAyMy42LTQuMiAxNC4xLTIgMjcuNS00IDM4LjQtMTAuMyAxMS42LTYuNyAxOS41LTE3LjkgMjEuNy0zMC43IDEuNC03LjguNi0xNS43LTItMjMtNi42IDMuOC0xNC4zIDYuMS0yMi42IDYuMXoiLz48cGF0aCBmaWxsPSIjMTVjMjEzIiBkPSJNMzA0LjYgMTcwLjFjMC0yMC44LTE0LjMtMzguMy0zMy41LTQzLjNMMzE0LjEgMEgxMDFsNDMuMSAxMjcuMmMtMTguNiA1LjQtMzIuMyAyMi42LTMyLjMgNDMgMCAxNSA3LjUgMjguMyAxOC45IDM2LjUtNC41IDYuNC05LjcgMTIuMy0xNS42IDE3LjlDMTA0IDIzNSA5MS43IDI0MyA3OC40IDI0OC4zYy0xMi04LjEtMTcuMi0yMi40LTEyLjUtMzUuMiAxOC4zLTUuNiAzMS42LTIyLjcgMzEuNi00Mi44IDAtMjQuNy0yMC4xLTQ0LjctNDQuNy00NC43LTI0LjcgMC00NC44IDIwLjEtNDQuOCA0NC44IDAgMTIuMiA1IDIzLjQgMTMgMzEuNC0uNyAxLjQtMS40IDIuOC0yLjEgNC4zLTYuNyAxMy44LTE0LjMgMjkuNC0xNy4yIDQ2LjktNS44IDM1IDMuNyA2My4xIDI2LjYgNzkgMTIuOSA4LjkgMjcuMSAxMy40IDQyLjQgMTMuNCAyNi4zIDAgNTMtMTMuMiA3OC44LTI2IDE4LjQtOS4xIDM3LjQtMTguNiA1Ni4xLTIzLjIgNi45LTEuNyAxNC4xLTIuNyAyMS43LTMuOCAxNS40LTIuMiAzMS4zLTQuNSA0NS42LTEyLjggMTYuNy05LjcgMjguMS0yNS45IDMxLjQtNDQuNSAyLjUtMTQuMyAwLTI4LjctNi40LTQxLjMgNC4zLTYuOSA2LjctMTUgNi43LTIzLjd6bS0xOS41IDBjMCAxMy45LTExLjMgMjUuMi0yNS4yIDI1LjItMTMuOSAwLTI1LjItMTEuMy0yNS4yLTI1LjIgMC00LjUgMS4yLTguOCAzLjMtMTIuNS44LTEuNCAxLjgtMi44IDIuOC00IDEtMS4yIDIuMi0yLjMgMy41LTMuM2wuMS0uMWMuOC0uNiAxLjctMS4yIDIuNi0xLjggMCAwIC4xIDAgLjEtLjEuNC0uMi44LS41IDEuMi0uNy4xIDAgLjItLjEuMy0uMS40LS4yLjktLjQgMS40LS42LjUtLjIgMS0uNCAxLjQtLjYuMSAwIC4yLS4xLjMtLjEuNC0uMS44LS4zIDEuMi0uNC4xIDAgLjMtLjEuNC0uMS41LS4xLjktLjIgMS40LS4zaC4xbDEuNS0uM2MuMSAwIC4zIDAgLjQtLjEuNCAwIC44LS4xIDEuMi0uMWguNWMuNSAwIDEtLjEgMS42LS4xaDEuM2MuNCAwIC43IDAgMS4xLjFoLjJjLjguMSAxLjYuMiAyLjQuNCAxMS40IDIuNCAyMC4xIDEyLjYgMjAuMSAyNC44ek0xMjguOSAyMGgxNTcuM2wtMzYuMSAxMDYuNWMtMS41LjMtMyAuOC00LjUgMS4zbC0zOC03Ny41LTM4LjEgNzdjLTEuNS0uNS0zLjEtLjgtNC43LTEuMUwxMjguOSAyMHptNzEuNSAxNDEuNGMtMS45LTkuNC02LjctMTcuOC0xMy41LTI0bDIwLjctNDEuOCAyMC45IDQyLjdjLTYuMiA2LjItMTAuNyAxNC4xLTEyLjUgMjMuMWgtMTUuNnptLTUwLjEtMTUuOGMuNS0uMS45LS4yIDEuNC0uM2guM2MuNC0uMS44LS4xIDEuMi0uMmguNGMuNCAwIC43LS4xIDEuMS0uMWgzLjljLjQgMCAuNy4xIDEgLjEuMiAwIC4zIDAgLjUuMS40LjEuNy4xIDEuMS4yLjEgMCAuMiAwIC40LjEuNS4xIDEgLjIgMS40LjNoLjFjLjQuMS44LjIgMS4yLjQuMSAwIC4yLjEuNC4xLjMuMS43LjIgMSAuNC4xIDAgLjIuMS4zLjEuNC4yLjguMyAxLjIuNWguMWMuNS4yLjkuNCAxLjMuN2guMWMuNC4yLjguNSAxLjIuNy4xIDAgLjEuMS4yLjEuNC4yLjcuNSAxLjEuN2wuMS4xYzEuMi45IDIuMyAxLjkgMy40IDIuOWwuMS4xYzEgMS4xIDIgMi4zIDIuOCAzLjYgMi42IDQgNC4xIDguNyA0LjEgMTMuOCAwIDEzLjktMTEuMyAyNS4yLTI1LjIgMjUuMnMtMjUuMi0xMS4zLTI1LjItMjUuMmMtLjEtMTEuNyA4LTIxLjYgMTktMjQuNHptLTk4LjQtLjdjMTMuOSAwIDI1LjIgMTEuMyAyNS4yIDI1LjJzLTExLjMgMjUuMi0yNS4yIDI1LjItMjUuMi0xMS4zLTI1LjItMjUuMiAxMS4zLTI1LjIgMjUuMi0yNS4yem0yMzIuNiA4Ni43Yy0yLjIgMTIuOC0xMC4xIDI0LTIxLjcgMzAuNy0xMC45IDYuMy0yNC4zIDguMy0zOC40IDEwLjMtNy43IDEuMS0xNS44IDIuMy0yMy42IDQuMi0yMC44IDUuMS00MC44IDE1LjEtNjAuMiAyNC43LTI0LjggMTIuMy00OC4yIDIzLjktNjkuOSAyMy45LTExLjMgMC0yMS40LTMuMi0zMS05LjktMjItMTUuMi0yMC45LTQzLjctMTguMy01OS4zIDIuNC0xNC42IDkuMS0yOC4zIDE1LjUtNDEuNC40LS44LjctMS41IDEuMS0yLjMgMi4yLjggNC41IDEuNCA2LjkgMS44LTMuOCAyMS4yIDcgNDMuMSAyOCA1My45bDMuOCAyIDQuMS0xLjVjMTcuNS02LjIgMzMuNy0xNi4zIDQ4LTI5LjggOC4xLTcuNiAxNS0xNS44IDIwLjgtMjQuNyAyLjMuNCA0LjYuNSA2LjkuNSAyMC44IDAgMzguMy0xNC4zIDQzLjMtMzMuNWgxNi44YzUgMTkuMyAyMi41IDMzLjUgNDMuMyAzMy41IDguMyAwIDE2LTIuMyAyMi42LTYuMiAyLjYgNy41IDMuNCAxNS4zIDIgMjMuMXoiLz48L3N2Zz4=">

[Jest](https://jestjs.io/es-ES/) es un framework creado por Facebook y mantenido por la comunidad con apoyo de Facebook. Es fácil de instalar y no requiere de una configuración muy compleja para poder añadirlo en nuestros proyectos.

### Preconfiguración

Instala los packages npm:

```bash
npm install
```

## Estructura del proyecto:


```
starter-code/
├── test
│   └── sample.test.js
|   └── sortedList.test.js
└─ package.json
└─ index.js
```
Trabajaremos con el fichero `index.js`. Escribiremos la implementación de nuestra clase `SortedList`.

La carpeta `test` contiene todos los tests que se ejecutarán con Jest.

### Ejecución de los tests

Para correr los tests ejecutamos: `npm test`.

```
$ npm test

> introduccion-node@1.0.0 test
> node --experimental-vm-modules node_modules/jest/bin/jest.js

(node:58423) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  test/sortedList.test.js
  SortedList
    Constructor
      ✓ should create an empty SortedList (1 ms)
      ✓ should have a property items
      ✓ should have a property length
    #add(x)
      ✓ should add a single value to SortedList (1 ms)
      ✓ should add a second value to SortedList, sorted (1 ms)
      ✓ should add a third value to SortedList, sorted (5 ms)
    #get(i)
      ✓ should return an OutOfBounds error if there is no element in that position (4 ms)
      ✓ should return the element in that position (18 ms)
    #max()
      ✓ should return an EmptyList error if there is no element in the list (1 ms)
      ✓ should return the max element in the list
    #min()
      ✓ should return an EmptyList exception if there is no element in the list (1 ms)
      ✓ should return the min element in the list
    #average()
      ✓ should return an EmptySortedList exception if there are no elements (1 ms)
      ✓ should return the average of elements in the array (1 ms)
    sum()
      ✓ should return a EmptySortedList exception if there are no elements in the list
      ✓ should add(sum) all elements of the array if there are elements in the list

 PASS  test/sample.test.js
  Sample Test
    ✓ should test that true === true (1 ms)

Test Suites: 2 passed, 2 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.317 s, estimated 1 s
Ran all test suites.
```


## SortedList Class

Hay que crear una clase que mantenga una lista ordenada de números, en orden ascendente.

La clase tendrá los siguientes métodos:

### Constructor

`new SortedList` debería crear un nuevo objeto de la clase `SortedList`.

El objeto tendría las propiedades `items` y `length`.

- `items` debe ser un array.
- `length` debe contener el número de elementos de ese array.

### Add

El método `add(x)` añade `x` al array `items` y lo ordena.

### Get

Este método obtiene el `n-esimo` valor de la lista.
En este caso necesitarás también la propiedad `length` que te proporciona el tamaño de la lista.

### Max

El método `max()` devuelve el valor más alto del array.

### Min
El método `min()` devuelve el menor valor de la lista.

### Average

El método `average()` devuelve el valor medio del array.

### Sum

El método `sum()` devuelve la suma de todos los valores.

