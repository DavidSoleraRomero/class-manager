import { Subject } from "./subject";

export class Student {

    private id: number;
    private name: string;
    private surnames: string;
    private subjects: Map<Subject, number | null>;
    
    constructor(id: number, name: string, surnames: string) {
        this.id = id;
        this.name = name;
        this.surnames = surnames;
        this.subjects = new Map<Subject, number | null>;
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

    public getSubjects(): Map<Subject, number | null> {
        return this.subjects;
    }

    public setSubjects(subjects: Map<Subject, number | null>): void {
        this.subjects = subjects;
    }

    public getNotes(): Map<Subject, number | null> {
        return this.subjects;
    }

}