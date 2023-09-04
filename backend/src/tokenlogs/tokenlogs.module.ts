import { Module } from '@nestjs/common';
import { TokenlogsService } from './tokenlogs.service';
import { TokenlogsController } from './tokenlogs.controller';
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
  controllers: [TokenlogsController],
  providers: [TokenlogsService],
  exports: [TokenlogsService],
})
export class TokenlogsModule {}
