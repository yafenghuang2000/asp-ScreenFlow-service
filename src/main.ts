import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import AppModule from './module';

const bootstrap = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('API 文档')
      .setDescription('API 描述')
      .setVersion('1.0')
      .addTag('api')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    const prompt = process.env.SERVICE_PORT ?? 3000;
    await app.listen(prompt);
    console.log(`asp-nest-service服务启动成功:${prompt ?? 3000}`);
  } catch (error) {
    console.log(
      `服务启动失败:${error instanceof Error ? error.message : String(error)}`,
    );
  }
};

void bootstrap();
