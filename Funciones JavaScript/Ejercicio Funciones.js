
function sum(num1, num2) {    //Defini una función llamada sum que toma dos parámetros num1 y num2.
    return num1 + num2;        //El return devuelve la suma de num1 y num2.
  }
  
  const num1 = parseInt(prompt("Digite un numero")); /* Declare una constante llamada num1 donde muestra un cuadro de entrada pidiendo al usuario que ingrese un número entero. */
  const num2 = parseInt(prompt("Digite otro numero"));/* Declare una constante llamada num2 donde muestra un cuadro de entrada pidiendo al usuario que ingrese un número entero. */
  sum(num1,num2) // Llame a la función sum pasando num1 y num2

  let result = sum(num1,num2); //Declare una variable llamada result donde llame nuevamente a la función sum con num1 y num2, y almacene el resultado de la suma en result.
  alert( result ); //Es para que muestre un cuadro de alerta que contiene el resultado de la suma.


