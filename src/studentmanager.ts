
class StudentManager {

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

    public addSubjectToStudent(subject: Subject, studentId: number) {
        this.students.forEach(student => {
            if (student.getId() == studentId) {
                let studentSubjects = student.getSubjects();
                studentSubjects.push(subject);
                student.setSubjects(studentSubjects)
            }
        })
    }

}