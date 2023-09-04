import { Controller, Get, Post, Body, Patch, Param, Delete, Response, Res, StreamableFile, Header } from '@nestjs/common';
import { PdfgenService } from './pdfgen.service';
import { CreatePdfgenDto } from './dto/create-pdfgen.dto';
import { UpdatePdfgenDto } from './dto/update-pdfgen.dto';
import { join } from 'path';
import { createReadStream } from 'fs';

@Controller('pdfgen')
export class PdfgenController {
  
  constructor(private readonly pdfgenService: PdfgenService) {}


  @Get('/sample/pdf')
async generatePdf2(@Res() res) {
    const buffer = await this.pdfgenService.secondExample();
    res.set({
      // pdf
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename=pdf.pdf`,
      'Content-Length': buffer.length,
      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });
    res.end(buffer);
  }

  @Get('Header')
  getFile(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'images/Capture.png'));
    res.set({
      'Content-Type': 'image/png',
    });
    return new StreamableFile(file);
  }
  @Get('Footer')
  getFiles(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'images/CaptureFooter.png'));
    res.set({
      'Content-Type': 'image/png',
    });
    return new StreamableFile(file);
  }




}



