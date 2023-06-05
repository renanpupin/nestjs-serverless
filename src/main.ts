import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Option 1 - to initialize nestjs directly
  await app.listen(3000);

  //Option 2 - to initialize nestjs with lambda
  // await app.init();
  // const expressApp = app.getHttpAdapter().getInstance();
  // return serverlessExpress({ app: expressApp });
}
//Option 1 - to initialize nestjs directly
bootstrap();

//Option 2 - to initialize nestjs with lambda
// export const handler: Handler = async (
//   event: any,
//   context: Context,
//   callback: Callback,
// ) => {
//   server = server ?? (await bootstrap());
//   return server(event, context, callback);
// };
