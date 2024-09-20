import { Student } from './student';
import { Subject } from './subject';
import { InstitutionManager } from './institutionmanager';
import { GeneralMenu } from './generalmenu';

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
    option = GeneralMenu.menu();
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
        institutionManager.createSubject();
        break;
      case 5:
        institutionManager.listSubjects();
        break;
      case 6:
        institutionManager.assignNoteToStudent();
        break;
      case 7:
        institutionManager.listStudentNotes();
        break;
      case 8:
        institutionManager.listStudentsNotes();
        break;
      case 9:
        institutionManager.listStudents();
        break;
      case 10:
        console.log("Gracias por hacer uso de nuestros sistemas gestores");
        break;
      default:
        console.log("Opción inválida introducida");
    } 
  } while(option != 10);

}

main();