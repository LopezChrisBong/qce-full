import { ApiProperty } from "@nestjs/swagger";
export class CreateSignupDto {

    @ApiProperty()
    name: string;
    
     @ApiProperty()
    username: string;
 
    @ApiProperty()
    password: string;
}
