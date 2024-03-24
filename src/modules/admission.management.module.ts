import { Module } from "@nestjs/common";
import { StudentController } from "src/admission-management-system/student/student.controller";
import { StudentModule } from "src/admission-management-system/student/student.module";
import { StudentService } from "src/admission-management-system/student/student.service";

@Module({
    imports:[
        StudentModule
    ],
    controllers: [
        StudentController
    ],
    providers: [
        StudentService
    ]
});

export class StudentInformationModule{};