import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    // Criação do construtor com a instancia do serviço
    constructor(private readonly coursesService: CoursesService) {

    }

    @Get()
    findAll () {
        return this.coursesService.findAll()
    }
//
    @Get(':id')
    findOne (@Param('id') id: string) {
        return this.coursesService.findOne(id)
    }

    @Post()
    create(@Body() body) {
return this.coursesService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coursesService.update(id, body)

    }

    @Delete(':id')
    remove (@Param('id') id: string) {
        return this.coursesService.remove(id)
    }


}
