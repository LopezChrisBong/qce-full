
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    save(newUser: void) {
      throw new Error('Method not implemented.');
    }
    create(user: any) {
      throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn({type:'int'})
    id:number;

    @Column({type:'varchar'})
    username: string;
    
    @Column({type:'varchar'})
    password: string;

    @Column({type:'varchar'})
    name: string;
    
    @CreateDateColumn({
        nullable: false,
        type: 'datetime',
        name: "created_at",
        default: () => 'CURRENT_TIMESTAMP(6)'
    })
    createdAt: Date
}
