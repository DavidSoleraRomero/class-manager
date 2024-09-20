import * as readline from 'readline-sync';

export class GeneralMenu {

    public static menu(): number {
        console.log("1. Crear alumno");
        console.log("2. Asignar materia a un alumno");
        console.log("3. Listar materias de un alumno");
        console.log("4. Crear una materia");
        console.log("5. Listar materias");
        console.log("6. Asignar una nota a una materia de un alumno");
        console.log("7. Listar notas de un alumno");
        console.log("8. Listar notas de todos los alumnos");
        console.log("9. Listar todos los alumnos");
        console.log("10. Salir");
        return readline.questionFloat("Opcion: ");
      }

}