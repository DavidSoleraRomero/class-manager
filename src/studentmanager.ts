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
                    studentSubjects.push(subject);
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

}