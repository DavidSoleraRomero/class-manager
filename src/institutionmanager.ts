import { StudentManager } from "./studentmanager";
import { SubjectManager } from "./subjectmanager";
import { Student } from './student';
import { Subject } from './subject';
import * as readline from 'readline-sync';

export class InstitutionManager {

    private studentManager = new StudentManager();
    private subjectManager = new SubjectManager();

    constructor() {}

    public addStudents(students: Student[]) {
        students.forEach(student => { this.studentManager.addStudent(student) });
    }

    public addSubjects(subjects: Subject[]) {
        subjects.forEach(subject => { this.subjectManager.addSubject(subject) });
    }

    public assignSubjectToStudent() {
        this.subjectManager.listSubjects();
        let subjectId = readline.questionInt("Introduce el ID de la asignatura: ");
        let subject = this.subjectManager.getSubject(subjectId);
        if (typeof subject === "object") {
            let studentId = readline.questionInt("Introduce el ID del alumno: ");
            if (this.studentManager.studentExists(studentId)) {
                this.studentManager.addSubjectToStudent(subject, studentId);
                console.log("Asignatura vinculada al alumno de forma satisfactoria.")
            } else console.log("Lo sentimos; ese alumno no existe");
        } else console.log("Lo sentimos; esa asignatura no existe");
    }

    public createStudent() {
        let studentId = readline.questionInt("Introduce el ID del alumno: ");
        let studentName = readline.question("Introduce el nombre del alumno: ");
        let studentSurnames = readline.question("Introduce los apellidos del alumno: ");
        if (studentId && studentName && studentSurnames) 
            this.studentManager.addStudent(new Student(studentId, studentName, studentSurnames));
        else console.log("Datos incorrectos introducidos. No se ha registrado ningún alumno.");
    }

    public listStudentSubjects() {
        let studentId = readline.questionInt("Introduce el ID del alumno: ");
        if (this.studentManager.studentExists(studentId)) {
            this.studentManager.printStudentSubjects(studentId);
        } else console.log("Lo sentimos; ese alumno no existe");
    }
    
}