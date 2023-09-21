import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("PDF")
  async downloadPDF(@Res() res): Promise<void> {
    const buffer = await this.appService.generarPDF();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': buffer.length,
    })

    res.end(buffer);
  }

  

@Get('/sample/pdf')
async generatePdf2(@Res() res) {
    const buffer = await this.appService.secondExample();
    res.set({
      // pdf
      'Content-Type': 'application/pdf',
      //Read PDF
      'Content-Disposition': `inline; filename=pdf.pdf`,
      //Downlod PDF
      //'Content-Disposition': `attachment; filename=pdf.pdf`,
      
      'Content-Length': buffer.length,
      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });
    res.end(buffer);
  }

  @Get('Google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('Google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }

  

  
  


}

