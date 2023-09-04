import { Test, TestingModule } from '@nestjs/testing';
import { authsController } from './auth.controller';
import { AuthService } from './auth.service';

describe('authsController', () => {
  let controller: authsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [authsController],
      providers: [AuthService],
    }).compile();

    controller = module.get<authsController>(authsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
