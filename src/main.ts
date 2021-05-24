import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DATABASE_HOST)
  // https://docs.nestjs.com/openapi/introduction
  const config = new DocumentBuilder()
    .setTitle('NestJS Training')
    .setDescription('Container Ready API')
    .setVersion('1.0')
    .addTag('container')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
