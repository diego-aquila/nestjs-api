import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do Nest JS",
            description: "Fundamentos do Nest JS",
            tags: ["node.js", "nestJS", "javascript"]
        }
    ]

    findAll() {
        return this.courses
    }

    findOne(id: string) {
        const course =  this.courses.find((course) => course.id === Number(id))

        if (!course) {
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND, )
            
        } else {
            return course
        }

    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto)

    }

    update(id: string, updateCourseDto: any){
        const indexCourse = this.courses.findIndex(course => course.id === Number(id))
        this.courses[indexCourse] = updateCourseDto
    }

    remove(id: string){
        const indexCourse = this.courses.findIndex(course => course.id === Number(id))
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
        }

    }
}
