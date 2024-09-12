import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
  .setTitle("Trade it documentation")
  .setDescription("This is documentation for tradeIT E-commerce")
  .setVersion("1.0.0")
  .addTag("Products")
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(5001 , ()=> console.log("application started", 5001));
}
bootstrap();
