import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
    async validateUser(CreateAuthDto: CreateAuthDto): Promise<any>{
        // console.log(CreateAuthDto)
        const user = await this.userRepository.findOneBy({username: CreateAuthDto.username});
        if (user && user.password=== CreateAuthDto.password){
        //   const saltOrRounds = 10;
        //   const password1 = user.password;
        //   const hash = await bcrypt.hash(password1, saltOrRounds);
          const {password, username, ...rest} = user;
        //   console.log(hash)
            return rest;
        }
        return 'walay data';
    }
}