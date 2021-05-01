import path from 'path';
import express from 'express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import './environment';

import { AppModule } from './modules/app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

    const config = new DocumentBuilder()
        .setTitle('API')
        .setDescription('API Documentation')
        .setVersion('1.0')
        .addBearerAuth();
    const document = SwaggerModule.createDocument(app, config.build());

    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });

    await app.listen(3000);
}

bootstrap()
    .catch(err => console.error(err));
