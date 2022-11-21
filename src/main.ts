import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({

    whitelist : true, //Ainda deixa cadastrar mas não entra a propriedade não definida no DTO
    forbidNonWhitelisted: true, //Não deixa cadastrar NADA se alguma propriedade não estiver no DTO
    transform: true

  }))
  await app.listen(3000);

}
bootstrap();
