import { IsString } from "class-validator"


export class CreateCourseDto {

   @IsString()
   readonly name: string
   
   
   @IsString()
   readonly description: string
   
   
   @IsString({each: true}) // Valida cada conteúdo
   readonly tags: string[]

}
