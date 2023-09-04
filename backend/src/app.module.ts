import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { SignupModule } from './signup/signup.module';
import { TokenlogsModule } from './tokenlogs/tokenlogs.module';
import { PdfgenModule } from './pdfgen/pdfgen.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User],
      synchronize: true,
      }),
      AuthModule,
      UsersModule,
      SignupModule,
      TokenlogsModule,
      PdfgenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
