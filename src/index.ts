// src/index.ts

import * as readline from 'readline-sync';
import { Student } from './student';
import { Subject } from './subject';
import { InstitutionManager } from './institutionmanager';

// const num1 = readline.questionFloat('Ingrese el primer número: ');
// const num2 = readline.questionFloat('Ingrese el segundo número: ');
// const indice = readline.keyInSelect(operaciones, 'Seleccione una operación: ');
// const continuar = readline.keyInYN('¿Desea realizar otra operación? ');

let institutionManager = new InstitutionManager();
institutionManager.addStudents([
  new Student(1, "David", "Solera Romero"),
  new Student(2, "Alba", "García Postigo"),
  new Student(3, "Ignacio", "Lázaro Zambrano")
]);
institutionManager.addSubjects([
  new Subject(1, "Programación"),
  new Subject(2, "Bases de datos"),
  new Subject(3, "Lenguaje de marcas"),
  new Subject(4, "Entornos de desarrollo"),
  new Subject(5, "Sistemas informáticos")
]);

function main() {

  let option: number = 0;
  do {
    menu()
    option = readline.questionFloat("Opción: ");
    switch(option) {
      case 1: 
        institutionManager.createStudent();
        break;
      case 2: 
        institutionManager.assignSubjectToStudent();
        break;
      case 3:
        institutionManager.listStudentSubjects();
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
        console.log("Gracias por hacer uso de nuestros sistemas gestores");
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