import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Use DocumentBuilder to create a new Swagger document config.
  const config = new DocumentBuilder()
    .setTitle('Recipes API') // sets title for API
    .setDescription('Recipes API') // sets the description of the API
    .setVersion('1.0') //sets the version of the API
    .build(); // Builds the document
  // Create a swagger module with the  application instance and the document config.
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger module with the application instance and the Swagger document.
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
