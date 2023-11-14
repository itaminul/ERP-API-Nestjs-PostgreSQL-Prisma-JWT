import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { UserService } from 'src/users/user.service';
import { SessionSerializer } from './session.serializer';
import { LocalStrategyJwt } from 'src/strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    UserService,
    SessionSerializer,
    LocalStrategyJwt,
  ],
})
export class AuthModule {}
