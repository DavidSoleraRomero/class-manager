import { Subject } from "./subject";

export class SubjectManager {

    private subjects: Subject[];

    constructor() {
        this.subjects = [];
    }

    public getAllSubjects() {
        return this.subjects;
    }

    public setAllSubjects(subjects: Subject[]) {
        this.subjects = subjects;
    }

    public getSubject(subjectId: number): Subject | null {
        for (let subject of this.subjects) {
            if (subject.getId() === subjectId)
                return subject;
        }
        return null;
    }

    public removeSubject(subjectId: number) {
        let temporalSubjects = this.subjects.filter( subject => { subject.getId() !== subjectId } );
        this.subjects = temporalSubjects;
    }

    public addSubject(newSubject: Subject) {
        if (!this.subjectExists(newSubject.getId())) {
            this.subjects.push(newSubject);
            console.log("Asignatura creada con éxito");
        } else console.log("Lo sentimos; el ID de la asignatura introducida ya existe");
    }

    public listSubjects() {
        if (this.subjects.length != 0) {
            console.log("Listado de asignaturas:");
            this.subjects.forEach(subject => {
                console.log(`${subject.getId()} - ${subject.getName()}`);
            });
        } else console.log("El sistema carece de asignaturas actualmente");
    }

    public subjectExists(subjectId: number) {
        for (let subject of this.subjects) 
            if (subject.getId() == subjectId) return true; 
        return false;
    }

}