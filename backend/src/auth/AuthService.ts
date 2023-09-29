// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
// import { CACHE_MANAGER } from '@nestjs/cache-manager';
// import { Cache } from 'cache-manager';
// import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from 'src/users/entities/user.entity';
// import { Repository } from 'typeorm';


// @Injectable()
// export class AuthService {



//   constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, @InjectRepository(User) private readonly userRepository: User) { }

//   // public async googleRedirect(req: Request, res: Response) {
//   //   //  console.log(req.user)
//   //   const userTempId = uuidv4();
//   //   await this.cacheManager.set(`temp-google-user_`, userTempId, 10000);
//   //   //  setTimeout(async () =>{
//   //   //   const googleUser = await this.cacheManager.get(`temp-google-user_${userTempId}`,
//   //   //   );
//   //   //   console.log(`user after 9s: ${JSON.stringify(googleUser)}`);
//   //   //  },9000);
//   //   //  setTimeout(async () =>{
//   //   //   const googleUser = await this.cacheManager.get(
//   //   //     `temp-google-user_${JSON.stringify(userTempId)}`,
//   //   //   );
//   //   //   console.log(`user after 11s: ${googleUser}`)
//   //   //  }, 11000 );
//   //   return null;
//   // }

//   // public async googleLogin(req: any,) {

//   //   const authorization = req.get('authorization');
//   //   if (!authorization) throw new UnauthorizedException();

//   //   const userTempId = authorization.replace("Bearer", '');
//   //   if (!uuidValidate(userTempId)) throw new UnauthorizedException();


//   //   const googleUser = await this.cacheManager.get(`temp-google-user_${userTempId}`);
//   //   this.handleDatabaseUser();

//   //   return googleUser;
//   // }
//   // async handleDatabaseUser(): Promise<any> {

//   // }

//   async socialLogin(req: { user: any; socialChannel: string }) {
//     // Passports middleware adds the user to the request object.
//     if (!req.user) {
//       throw new BadRequestException('No account presented.');
//     }

//     // Check if there is a user with this email already:
//     const existingUser: User = await this.userRepository.find({
//       email: req.user.email,
//     });
//     if (existingUser) {
//       return existingUser;
//     }

//     const newUser = await this.userRepository.createUser({
//       ...req.user,
//       social_channel: req.socialChannel,
//       email_verified: true,
//     });
//     return {
//       user: newUser,
//     };
//   }
// }
