import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo deja la data que espera el DTO y lo demas no lo agrega
      forbidNonWhitelisted: true, // manda un error[] en la data que no espera el DTO
    })
  );

  await app.listen(3000);
}
main();
