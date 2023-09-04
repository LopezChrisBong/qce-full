import { PartialType } from '@nestjs/swagger';
import { CreatePdfgenDto } from './create-pdfgen.dto';

export class UpdatePdfgenDto extends PartialType(CreatePdfgenDto) {}
