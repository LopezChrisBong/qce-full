import { ApiProperty } from "@nestjs/swagger";

export class CreateTokenlogDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    username: string;
 
    @ApiProperty()
    password: string;
 
}
