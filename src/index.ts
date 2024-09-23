import { Student } from './student';
import { Subject } from './subject';
import { InstitutionManager } from './institutionmanager';
import { GeneralMenu } from './generalmenu';
import * as readline from 'readline-sync';

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
  console.log(GeneralMenu.welcomeMessage());
  readline.keyInPause("Presione cualquier letra para continuar");
  console.log();
  do {
    option = GeneralMenu.menu();
    console.log()
    switch(option) {
      case 1: 
        institutionManager.createStudent();
        break;
      case 2: 
        institutionManager.createSubject();
        break;
        case 3:
        institutionManager.assignSubjectToStudent();
        break;
      case 4:
        institutionManager.listSubjects();
        break;
      case 5:
        institutionManager.listStudentSubjects();
        break;
      case 6:
        institutionManager.listStudents();
        break;
      case 7:
        institutionManager.listStudentNotes();
        break;
      case 8:
        institutionManager.listStudentsNotes();
        break;
      case 9:
        institutionManager.assignNoteToStudent();
        break;
      case 10:
        console.log("Gracias por hacer uso de nuestros sistemas gestores.");
        console.log(GeneralMenu.welcomeMessage());
        console.log("El programa Class Manager finalizó correctamente.");
        break;
      default:
        console.log("Opción inválida introducida");
    }
    console.log();
  } while(option != 10);

}
main();