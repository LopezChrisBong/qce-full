import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { SignupModule } from './signup/signup.module';
import { TokenlogsModule } from './tokenlogs/tokenlogs.module';
import { PdfgenModule } from './pdfgen/pdfgen.module';
import { GoogleStrategy } from './google.strategy';
import { AuthModule } from './auth/auth.module';
import { AuthUtilsModule } from './auth-utils/auth-utils.module';
import { CacheModule } from '@nestjs/cache-manager';
import { JwtModule } from '@nestjs/jwt';

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
     
      CacheModule.register({
        ttl: 10,
        max:100000,
        isGlobal:true
      }),
      UsersModule,
      SignupModule,
      TokenlogsModule,
      PdfgenModule,
      AuthModule,
      AuthUtilsModule,
  ],
  controllers: [AppController],
  providers: [AppService,GoogleStrategy],
})
export class AppModule {}
