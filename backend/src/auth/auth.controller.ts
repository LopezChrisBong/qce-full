import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { GoogleOAuthGuard } from './guards/google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
 
  @Get("google")
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleRedirect(@Req() req, @Res() res) {
    return this.authService.googleRequest(req, res)
  }

  @Get('callback')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@Request() req, @Res() res) {
    res.redirect(`${process.env.FRONTEND_URL}/home`);
  }

  @Post('google/login')
  googleLogin(@Req() req){
    return this.authService.socialLogin(req);
  }

  @Post('google/SignIn')
  googleSignIn(@Req() req){
    return this.authService.googleSignIn(req);
  }

  @Post('google/signUp')
  googleSignUp(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signinLocal(createAuthDto);
  }
  

}
