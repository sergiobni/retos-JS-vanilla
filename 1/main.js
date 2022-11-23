//////// PRIMER EJERCICIO
const cualMayor = (num1, num2) => {
  if (num1 > num2) {
    return 'Es mayor el primer número';
  } else if (num1 < num2) {
    return 'Es mayor el segundo número';
  } else {
    return 'Son el mismo número';
  }
};

console.log(cualMayor(4, 4));

///////// SEGUNDO EJERCICIO

const bienvenido = (nombre) => `Bienvenido ${nombre}`;
console.log(bienvenido('Sergio'));

///////// TERCER EJERCICIO

// const nombre = prompt('¿Cual es tu nombre?');
//console.log(bienvenido(nombre));

//////// CUARTO EJERCICIO

//const radio = parseInt(prompt('¿Cual es el radio?'));
//const calcradio = (radio) => `El área del círculo es ${radio * Math.PI}`;
//console.log(calcradio(radio));

///////// QUINTO EJERCICIO

// const calcparimpar = parseInt(prompt('Dime un número'));
// const calcpar = (num) =>
// num % 2 === 0 ? `El número ${num} es par` : `El número ${num} es impar`;
// console.log(calcpar(calcparimpar));

////////// SEXTO EJERCICIO

// const precio = parseInt(prompt('Dime un número'));
// const calcIva = (num) => `El precio final con IVA es ${num * 1.21} `;
// console.log(calcIva(precio));

////////// SEPTIMO EJERCICIO

// let i = 0;
// while (i < 101) {
//   console.log(i);
//   i++;
// }

//////// OCTAVO EJERCICIO

// for (i = 0; i < 101; i++) {
//   console.log(i);
// }

/////////// NOVENO EJERCICIO

// for (i = 0; i < 101; i++) {
//   if (i % 2 === 0 || i % 3 === 0) {
//     console.log(i);
//   }
// }

////////// DÉCIMO EJERCICIO
// const numventas = parseInt(prompt('Introduce el número de ventas'));
// let sumaventas = 0;
// for (i = 1; i <= numventas; i++) {
//   sumaventas += parseInt(prompt(`Introduce la venta ${i}`));
// }
// console.log(sumaventas);

/////// ONCEAVO EJERCICIO

// const diasemana = prompt('Dime un dia de la semana');
// switch (diasemana) {
//   case 'lunes':
//     console.log('Es dia laboral');
//     break;
//   case 'martes':
//     console.log('Es dia laboral');
//     break;
//   case 'miercoles':
//     console.log('Es dia laboral');
//     break;
//   case 'jueves':
//     console.log('Es dia laboral');
//     break;
//   case 'viernes':
//     console.log('Es dia laboral');
//     break;
//   case 'sabado':
//     console.log('No es dia laboral');
//     break;
//   case 'domingo':
//     console.log('No es dia laboral');
//     break;
//   default:
//     console.log('Introduce un día valido en minúsuclas');
// }

////////// DOCEAVO EJERCICIO

// const passwd = 1234;
// for (i = 0; i < 3; i++) {
//   let userpass = parseInt(prompt('Dime la contraseña numérica'));
//   if (userpass === passwd) {
//     console.log('Enhorabuena');
//     break;
//   }
// }

/////////////// DECIMOTERCERO EJERCICIO
// const num1 = parseInt(prompt('Dime el primer número'));
// const operador = prompt('Dime el operador a utilizar (+ , - , * , / , ^ , %');
// const num2 = parseInt(prompt('Dime el segundo número'));

// const calculo = (num1, operador, num2) => {
//   switch (operador) {
//     case '+':
//       alert(`El resultado es ${num1 + num2}`);
//       break;
//     case '-':
//       alert(`El resultado es ${num1 - num2}`);
//       break;
//     case '*':
//       alert(`El resultado es ${num1 * num2}`);
//       break;
//     case '/':
//       alert(`El resultado es ${num1 / num2}`);
//       break;
//     case '^':
//       alert(`El resultado es ${Math.pow(num1, num2)}`);
//       break;
//     case '%':
//       alert(`El resultado es ${num1 % num2}`);
//       break;
//   }
// };

// calculo(num1, operador, num2);
