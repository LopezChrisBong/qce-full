import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    picture: string;

    @ApiProperty()
    verified: boolean;

//   user: DeepPartial<Auth>[];

 
 
}
