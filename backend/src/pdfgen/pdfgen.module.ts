import { Module } from '@nestjs/common';
import { PdfgenService } from './pdfgen.service';
import { PdfgenController } from './pdfgen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User])
],
  controllers: [PdfgenController],
  providers: [PdfgenService],
})
export class PdfgenModule {}
