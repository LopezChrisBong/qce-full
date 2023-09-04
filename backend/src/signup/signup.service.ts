import { Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignupService {
  constructor(@InjectRepository(User) private readonly tableRepository: Repository<User>){}


  create(createSignupDto: CreateSignupDto) {
    const user = this.tableRepository.create(createSignupDto);
    return  this.tableRepository.save(user);
  }

  findAll() {
    return this.tableRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} signup`;
  }

  update(id: number, updateSignupDto: UpdateSignupDto) {
    return  this.tableRepository.update(id,updateSignupDto);
  }

  remove(id: number) {
    return  this.tableRepository.delete(id);
  }
}
