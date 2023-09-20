import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './logger/logger.service';
import * as dotenv from 'dotenv';

if (process.env.CONFIG_FILE) {
  const configFile = process.env.CONFIG_FILE;
  dotenv.config({
    path: configFile,
  });
} else {
  dotenv.config();

}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerService = app.get(CustomLogger);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  }
  //TODO make listening port dynamic
  loggerService.log("app nbuilded and listening on port 3000")
  await app.listen(3000);
}
bootstrap();
