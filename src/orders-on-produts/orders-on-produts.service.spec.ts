import { Test, TestingModule } from '@nestjs/testing';
import { OrdersOnProdutsService } from './orders-on-produts.service';

describe('OrdersOnProdutsService', () => {
  let service: OrdersOnProdutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersOnProdutsService],
    }).compile();

    service = module.get<OrdersOnProdutsService>(OrdersOnProdutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
