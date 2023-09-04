import { PartialType } from '@nestjs/swagger';
import { CreateTokenlogDto } from './create-tokenlog.dto';

export class UpdateTokenlogDto extends PartialType(CreateTokenlogDto) {}
