import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { PrismaClientExceptionFilter } from './filters/prisma-client-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './filters/transform-nterceptor';
import * as session from 'express-session';
import * as passport from 'passport';




//role base authentication
//https://blog.bitsrc.io/authentication-and-authorization-in-nestjs-39f9d92184ab
//https://shpota.com/2022/07/16/role-based-authorization-with-jwt-using-nestjs.html

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: "key",
      resave: false,
      saveUninitialized: false,
      // cookie: { maxAge: 10000 },
      cookie: { maxAge: 3600000 },
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new TransformInterceptor());
  const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  // app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(9007);
}
bootstrap();
