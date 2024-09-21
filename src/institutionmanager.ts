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
        if (subject != null) {
            this.studentManager.listStudents();
            let studentId = readline.questionInt("Introduce el ID del alumno: ");
            if (this.studentManager.studentExists(studentId)) {
                this.studentManager.addSubjectToStudent(subject, studentId);
                console.log("Asignatura vinculada al alumno de forma satisfactoria.")
            } else console.log("Lo sentimos; ese alumno no existe");
        } else console.log("Lo sentimos; esa asignatura no existe");
    }

    public createStudent() {
        this.studentManager.listStudents();
        let studentId = readline.questionInt("Introduce el ID del alumno: ");
        let studentName = readline.question("Introduce el nombre del alumno: ");
        let studentSurnames = readline.question("Introduce los apellidos del alumno: ");
        if (studentId && studentName && studentSurnames) 
            this.studentManager.addStudent(new Student(studentId, studentName, studentSurnames));
        else console.log("Datos incorrectos introducidos. No se ha registrado ningún alumno.");
    }

    public listStudentSubjects() {
        this.studentManager.listStudents();
        let studentId = readline.questionInt("Introduce el ID del alumno: ");
        if (this.studentManager.studentExists(studentId)) {
            let student = this.studentManager.getStudent(studentId);
            console.log(`Alumno: ${student?.getName()} ${student?.getSurnames()}`);
            this.studentManager.printStudentSubjects(studentId);
        } else console.log("Lo sentimos; ese alumno no existe");
    }

    public createSubject() {
        this.subjectManager.listSubjects();
        let subjectId = readline.questionInt("Introduce el ID de la materia: ");
        let subjectName = readline.question("Introduce el nombre de la materia: ");
        this.subjectManager.addSubject(new Subject(subjectId, subjectName));
    }

    public listSubjects() {
        this.subjectManager.listSubjects();
    }

    public assignNoteToStudent() {
        this.studentManager.listStudents();
            let studentId = readline.questionInt("Introduce el ID del alumno: ");
            if (this.studentManager.studentExists(studentId)) {
                let studentSubjects = this.studentManager.getStudentSubjects(studentId);
                if (studentSubjects?.size != 0) {
                    studentSubjects?.forEach((note, subject) => { 
                        console.log(`${subject.getId()} - ${subject.getName()} - Nota: ${(note == null) ? "Sin nota" : note}`);
                    });
                    let subjectId = readline.questionInt("Introduce el ID de la materia: ");
                    let subject = this.subjectManager.getSubject(subjectId);
                    if (subject == null) console.log("Lo sentimos; esa asignatura no existe");
                    else {
                        if (studentSubjects?.has(subject)) { 
                            let note = readline.questionInt("Introduce la nota del alumno: ");
                            this.studentManager.assignNoteToStudent(subject, studentId, note);
                            console.log("Nota asignada al alumno de forma satisfactoria.")
                        } else console.log("Lo sentimos; el alumno no dispone de esa asignatura"); 
                    }
                } else console.log("Lo sentimos; el alumno no dispone de asignaturas actualmente");
                
            } else console.log("Lo sentimos; ese alumno no existe");
    }

    public listStudentNotes() {
        this.studentManager.listStudents();
        let studentId = readline.questionInt("Introduce el ID del alumno: ");
        if (this.studentManager.studentExists(studentId)) 
            this.studentManager.listStudentNotes(studentId);
        else console.log("Lo sentimos; ese alumno no existe");
    }

    public listStudentsNotes() {
        this.studentManager.listStudentsNotes();
    }

    public listStudents() {
        this.studentManager.listStudents();
    }
    
}