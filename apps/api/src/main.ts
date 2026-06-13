import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT ?? 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
}
bootstrap()
  .then(() => {
    console.log(`API server running on post ${PORT}`);
  })
  .catch((error) => console.log(error));
