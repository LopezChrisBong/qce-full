import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTokenlogDto } from './dto/create-tokenlog.dto';
// import { UpdateTokenlogDto } from './dto/update-tokenlog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TokenlogsService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
          private jwtServices: JwtService){}

       

 
  async signinLocal(createTokenlogDto:CreateTokenlogDto,): Promise<any>{

    // console.log(createTokenlogDto)
   const  user = await this.userRepository.findOneBy({email: createTokenlogDto.username});

   if(user){
          const match = await bcrypt.compare(createTokenlogDto.password, user.password);
          if(!match) throw new UnauthorizedException('Invalid Credentials');
          // if(user?.password !== user.password) throw new UnauthorizedException('Password incorrect');
          if(match)
           {
          const payload = { sub: user.id, username: user.email};
          //  console.log(payload)
          return {
            access_token: await this.jwtServices.signAsync(payload),
            };
        }
      // {
       
      //  //  return user;
      

      // }
      // return 'Invalid Credentials';
      
    }
     console.log(user)



   
  }

  async signupLocal(createTokenlogDto: CreateTokenlogDto): Promise<any>{

      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(createTokenlogDto.password, salt);
      createTokenlogDto.password = hashPassword;
      const user = await this.userRepository.create(createTokenlogDto);
      return  this.userRepository.save(user);
  }


  
  
}
