import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    username: string;
 
 
}
