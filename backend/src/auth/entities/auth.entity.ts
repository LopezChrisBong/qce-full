import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
@Entity()
export class Auth {
 
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: 'default.png' })
  picture: string;

  @Column({ default: false })
  verified: boolean;

  @Column({ default: 'local' })
  provider: string;

   // Instance method to check if passwords match
  //  async comparePasswords(hashedPassword: string, candidatePassword: string) {
  //   return await bcrypt.compare(candidatePassword, hashedPassword);
  // }
}
