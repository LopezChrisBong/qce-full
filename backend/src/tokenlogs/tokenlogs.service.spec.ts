import { Test, TestingModule } from '@nestjs/testing';
import { TokenlogsService } from './tokenlogs.service';

describe('TokenlogsService', () => {
  let service: TokenlogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenlogsService],
    }).compile();

    service = module.get<TokenlogsService>(TokenlogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
