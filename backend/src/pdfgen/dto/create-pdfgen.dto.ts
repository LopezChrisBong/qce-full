import { ApiProperty } from "@nestjs/swagger";

export class CreatePdfgenDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    username: string;
 
    @ApiProperty()
    password: string;
 
}
