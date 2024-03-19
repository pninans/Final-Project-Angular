import { Category } from "./category.model";

export enum LearningMode {
    Frontal ,
    Zoom 
}


export class Course {
    code: number;
    name: string;
    category: Category;
    lessonCount:number;
    startDate: string;
    syllabus: string[];
    learningMode: LearningMode;
    instructorCode: string;
    image: string;

    constructor(
        code: number,
        name: string,
        category: Category,
        lessonCount: number,
        startDate: string,
        syllabus: string[],
        learningMode: LearningMode,
        instructorCode: string,
        image: string
    ) {
        this.code = code;
        this.name = name;
        this.category = category;
        this.lessonCount = lessonCount;
        this.startDate = startDate;
        this.syllabus = syllabus;
        this.learningMode = learningMode;
        this.instructorCode = instructorCode;
        this.image = image;
    }
}
