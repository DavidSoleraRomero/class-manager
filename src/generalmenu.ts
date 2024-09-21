import * as readline from 'readline-sync';

export class GeneralMenu {

    public static menu(): number {
        console.log("1. Crear alumno");
        console.log("2. Crear una materia");
        console.log("3. Asignar materia a un alumno");
        console.log("4. Listar todas las materias");
        console.log("5. Listar materias de un alumno");
        console.log("6. Listar todos los alumnos");
        console.log("7. Listar notas de un alumno");
        console.log("8. Listar notas de todos los alumnos");
        console.log("9. Asignar una nota a una materia de un alumno");
        console.log("10. Salir");
        return readline.questionFloat("Opcion: ");
      }

}