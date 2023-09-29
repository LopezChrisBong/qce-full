import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokenlogsService } from './tokenlogs.service';
import { CreateTokenlogDto } from './dto/create-tokenlog.dto';
import { UpdateTokenlogDto } from './dto/update-tokenlog.dto';

@Controller('auth')
export class TokenlogsController {
  constructor(private readonly tokenlogsService: TokenlogsService) {}

  @Post('/local/signIn')
  signinLocal(@Body() createTokenlogDto: CreateTokenlogDto) {
    return this.tokenlogsService.signinLocal(createTokenlogDto);
  }
  
  @Post('local/signUp')
  signupLocal(@Body() createTokenlogDto: CreateTokenlogDto) {
    return this.tokenlogsService.signupLocal(createTokenlogDto);
  }

}
