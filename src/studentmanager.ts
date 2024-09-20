import { Student } from "./student";
import { Subject } from "./subject";

export class StudentManager {

    private students: Student[];

    constructor() {
        this.students = [];
    }

    public removeStudent(studentId: number) {
        let temporalStudents = this.students.filter( student => { student.getId() !== studentId } );
        this.students = temporalStudents;
    }

    public addStudent(newStudent: Student) {
        this.students.push(newStudent);
    }

    public addSubjectToStudent(subject: Subject | null, studentId: number) {
        if (subject != null)
            this.students.forEach(student => {
                if (student.getId() == studentId) {
                    let studentSubjects = student.getSubjects();
                    studentSubjects.set(subject, null);
                    student.setSubjects(studentSubjects);
                }
            })
    }

    public studentExists(studentId: number) {
        for (let student of this.students) 
            if (student.getId() == studentId) return true;
        return false;
    }

    public printStudentSubjects(studentId: number) {
        this.students.forEach(student => {
            if (student.getId() == studentId) console.log(student.getSubjects());
        })
    }

    public assignNoteToStudent(subject: Subject, studentId: number, note: number) {
        for (let student of this.students) {
            if (student.getId() == studentId) {
                let studentSubjects = student.getSubjects();
                studentSubjects.set(subject, note);
            }
        }
    }

    public listStudentNotes(studentId: number) {
        for (let student of this.students) {
            if (student.getId() == studentId) {
                if (student.getSubjects().size != 0)  {
                    student.getSubjects().forEach((note, subject) => {
                        console.log(`Asignatura -> ${subject.getName()} - ${(note == null) ? "Sin nota" : note}`);
                    });
                } else console.log("Actualmente ese estudiante no dispone de asignaturas / notas.")
            } 
        }
    }

    public listStudentsNotes() {
        for (let student of this.students) {
            console.log(`Alumno: ${student.getName()} ${student.getSurnames()}`);
            if (student.getSubjects().size != 0)  {
                student.getSubjects().forEach((note, subject) => {
                    console.log(`Asignatura -> ${subject.getName()} - ${(note == null) ? "Sin nota" : note}`);
                });
            } else console.log("Actualmente ese estudiante no dispone de asignaturas / notas.")
        }
    }

    public listStudents() {
        this.students.forEach(student => {
            console.log(`${student.getId()} - ${student.getName()} ${student.getSurnames()}`);
        });
    }

}