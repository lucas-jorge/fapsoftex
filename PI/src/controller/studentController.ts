class StudentController {
    private model: Student;
    private view: StudentService;

    constructor(model: Student, view: StudentService) {
        this.model = model;
        this.view = view;
    }

    setStudentName(name: string) {
        this.model.name = name;
    }

    getStudentName(): string {
        return this.model.name;
    }

    setStudentGrade(grade: number) {
        this.model.grade = grade;
    }

    getStudentGrade(): number {
        return this.model.grade;
    }

    updateView(): string {
        return this.view.printStudentDetails(this.model.name, this.model.grade);
    }
}