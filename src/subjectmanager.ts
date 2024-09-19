
class SubjectManager {

    private subjects: Subject[];

    constructor() {
        this.subjects = [];
    }

    public getSubjects() {
        return this.subjects;
    }

    public setSubjects(subjects: Subject[]) {
        this.subjects = subjects;
    }

    public removeSubject(subjectId: number) {
        let temporalSubjects = this.subjects.filter( subject => { subject.getId() !== subjectId } );
        this.subjects = temporalSubjects;
    }

    public addSubject(newSubject: Subject) {
        this.subjects.push(newSubject);
    }

}