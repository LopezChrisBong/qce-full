import { Test, TestingModule } from '@nestjs/testing';
import { TokenlogsController } from './tokenlogs.controller';
import { TokenlogsService } from './tokenlogs.service';

describe('TokenlogsController', () => {
  let controller: TokenlogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenlogsController],
      providers: [TokenlogsService],
    }).compile();

    controller = module.get<TokenlogsController>(TokenlogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
