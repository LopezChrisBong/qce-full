import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  // create(arg0: any) {
  //     throw new Error('Method not implemented.');
  // }
  // findOne(arg0: { email: any; }): User | PromiseLike<User> {
  //   throw new Error('Method not implemented.');
  // }
  // createUser(arg0: any) {
  //   throw new Error('Method not implemented.');
  // }
  // find(arg0: { email: any; }): User | PromiseLike<User> {
  //   throw new Error('Method not implemented.');
  // }
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: 'default.png' })
  photo: string;

  @Column({ default: false })
  verified: boolean;

  @Column({ default: 'local' })
  provider: string;

   // Instance method to check if passwords match
  //  async comparePasswords(hashedPassword: string, candidatePassword: string) {
  //   return await bcrypt.compare(candidatePassword, hashedPassword);
  // }
}