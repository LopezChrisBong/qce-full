import { Module } from '@nestjs/common';
import { AuthService } from './AuthService';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'src/google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    global: true,
    secret: 'super-secret-cat',
    signOptions: { expiresIn: '7d' },

  }),
],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
