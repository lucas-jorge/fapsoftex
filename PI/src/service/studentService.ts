import {Dispositivo} from "../models/student";

class StudentService {
    printStudentDetails(name: string, grade: number) {
        return `Student: ${name}, Grade: ${grade}`;
    }
}