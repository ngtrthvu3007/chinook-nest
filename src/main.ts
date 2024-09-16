import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseFormatInterceptor } from './common/interceptors';
import { ValidationPipe } from '@nestjs/common';
import { ValidationExceptionFilter } from './common/exceptionFilters/validate.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  // app.useGlobalFilters(new ValidationExceptionFilter());
  await app.listen(3000);
}
bootstrap();
