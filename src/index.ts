// src/index.ts

import * as readline from 'readline-sync';

// const num1 = readline.questionFloat('Ingrese el primer número: ');
// const num2 = readline.questionFloat('Ingrese el segundo número: ');
// const indice = readline.keyInSelect(operaciones, 'Seleccione una operación: ');
// const continuar = readline.keyInYN('¿Desea realizar otra operación? ');

function main() {

  let option: number = 0;
  do {
    menu()
    option = readline.questionFloat("Opción: ");
    switch(option) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      case 6:

        break;
      case 7:

        break;
      case 8:

        break;
      default:
        console.log("Opción inválida introducida");
    }
  } while(option != 8);

  
}

function menu() {
  console.log("1. Crear alumno");
  console.log("2. Asignar materia a un alumno");
  console.log("3. Listar materias de un alumno");
  console.log("4. Crear una materia");
  console.log("5. Listar materias");
  console.log("6. Asignar una nota a una materia de un alumno");
  console.log("7. Listar alumnos con nota");
  console.log("8. Salir");
}

// Execute the main function
main();