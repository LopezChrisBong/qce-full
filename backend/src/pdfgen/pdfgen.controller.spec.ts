import { Test, TestingModule } from '@nestjs/testing';
import { PdfgenController } from './pdfgen.controller';
import { PdfgenService } from './pdfgen.service';

describe('PdfgenController', () => {
  let controller: PdfgenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfgenController],
      providers: [PdfgenService],
    }).compile();

    controller = module.get<PdfgenController>(PdfgenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
