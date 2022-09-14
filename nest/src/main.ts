import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(3005);
=======
  await app.listen(3006);
  console.log(`Application is running on: ${await app.getUrl()}`);
>>>>>>> 3b67fe7 (Refact(auth) Adjustments in the security)
}
bootstrap();
