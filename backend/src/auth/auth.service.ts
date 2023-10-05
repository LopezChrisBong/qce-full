import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import {Request, Response} from 'express'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, @InjectRepository(Auth) private readonly authRepository: Repository<Auth>,private jwtServices: JwtService )
     { }


   public async googleRequest(req: Request, res:Response)   {
      console.log(req.user);
      const userTempId =uuidv4();
      await this.cacheManager.set(
        `tem-google-user_${userTempId}`,
        req.user,
        10000
      );
      // res.redirect('urlid=${userTempId}')
    }

async googleSignIn(req: Request){
  const authorization = req.get('authorization');
      if (!authorization) throw new UnauthorizedException();
  
      const userTempId = authorization.replace("Bearer", '');
      if (!uuidValidate(userTempId)) throw new UnauthorizedException();
  
  
      const googleUser = await this.cacheManager.get(`temp-google-user_${userTempId}`);
      this.handleDatabaseUser();
  
      return googleUser;
    
}
async handleDatabaseUser(): Promise<any> { }

async signinLocal(createAuthDto:CreateAuthDto,): Promise<any>{

  //  console.log(createAuthDto)

  // const user =  createAuthDto;

  // // console.log(user.email)

  // if (!user.email){
  //   throw new BadRequestException('No account presented.');
  // }
  const existingUser = await this.authRepository.findOneBy({
    email: createAuthDto.email,
  });

   console.log(existingUser)

   if(existingUser){
    const payload = { sub: existingUser.id, email: existingUser.email};
      // console.log(this.jwtServices.signAsync(payload))
    return {
      access_token: await this.jwtServices.signAsync(payload),
      user: existingUser
      };
   }
 if(existingUser === null){
      const usersave =  this.authRepository.create(createAuthDto);
      return  this.authRepository.save(usersave);
 }

  if(existingUser){
    const payload = { sub: existingUser.id, email: existingUser.email};
        //  console.log(payload)
        return {
          access_token: await this.jwtServices.signAsync(payload),
          };
  }


//  console.log(user)
//  if(user){
//         const match = await bcrypt.compare(createTokenlogDto.password, user.password);
//         if(!match) throw new UnauthorizedException('Invalid Credentials');
//         // if(user?.password !== user.password) throw new UnauthorizedException('Password incorrect');
//         if(match)
//          {
  // if(user?.email !== user.email) throw new UnauthorizedException('Incorrect Email');

    // if(user.email == null){
    //   return 'No such file Exist'
    // }
 
    //  const payload = { name: user.name, email: user.email};
    //     //  console.log(payload)
    //     return {
    //       access_token: await this.jwtServices.signAsync(payload),
    //       };
  
  // const usersave = await this.authRepository.create(user);
  // return  this.authRepository.save(usersave);
       
      // }
    // {
     
    //  //  return user;
    

    // }
    // return 'Invalid Credentials';
    
  // }
  //  console.log(user)

}



async socialLogin(req: { user: any; email: string }) {
    // Passports middleware adds the user to the request object.
    if (!req.user) {
      throw new BadRequestException('No account presented.');
    }

    // Check if there is a user with this email already:
    const existingUser = await this.authRepository.findOneBy({
      email: req.user.email,

    });
    console.log(existingUser)
    
    if (existingUser) {
      return existingUser;
    }

    const newUser =  this.authRepository.create({
      ...req.user,
      email: req.email,
      email_verified: true,
    });
    const saveUser = await this.authRepository.save(newUser)
    return {
      user: saveUser
    };
  }

}
