import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authsController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User])],
  controllers: [authsController],
  providers: [AuthService],
})
export class AuthModule {}
