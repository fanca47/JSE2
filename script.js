// 1
function par(num) {
    if (num % 2 === 0) {
      console.log(num + ' es par');
    } else {
      console.log(num + ' es impar');
    }
  }
  par(17);

// 2
  function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + ' es mayor que ' + num2);
    } else if (num2 > num1) {
      console.log(num2 + ' es mayor que ' + num1);
    } else {
      console.log(num1 + ' y ' + num2 + ' son iguales');
    }
  }
  compararNumeros (8,9);

// 3
  function multiploDe5(num) {
    if (num % 5 === 0) {
      console.log(num + ' es múltiplo de 5');
    } else {
      console.log(num + ' no es múltiplo de 5');
    }
  }
  multiploDe5(35);

// 4
  function clogNumerosHasta(num) {
    for (let i = 0; i <= num; i++) {
      console.log(i);
    }
  }
  clogNumerosHasta(5);
// 5
  function clogPalabraCantidad(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }
  clogPalabraCantidad('hola', 3);

// 6
  function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  const miArray = [1, 2, 3, 4, 5];
  imprimirArray(miArray);

// 7
  function imprimirArraySinQuintoElemento(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }
  
  
  const secArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  imprimirArraySinQuintoElemento(secArray);

//   8
  
  function imprimirArrayMultiplicadoPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
    }
  }
  
 
  const terArray = [1, 2, 3, 4, 5];
  imprimirArrayMultiplicadoPorNumero(terArray, 2);
  
