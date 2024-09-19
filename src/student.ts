class Student {

    private id: number;
    private name: string;
    private surnames: string;
    private subjects: Subject[];
    
    constructor(id: number, name: string, surnames: string, subjects: Subject[] = []) {
        this.id = id;
        this.name = name;
        this.surnames = surnames;
        this.subjects = subjects;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSurnames(): string {
        return this.surnames;
    }

    public setSurnames(surnames: string) {
        this.surnames = surnames;
    }

    public getSubjects(): Subject[] {
        return this.subjects;
    }

    public setSubjects(subjects: Subject[]): void {
        this.subjects = subjects;
    }

    public getNotes(): Subject[] {
        return this.subjects;
    }

}