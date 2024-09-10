import { Test, TestingModule } from '@nestjs/testing';
import { OrdersOnProdutsController } from './orders-on-produts.controller';
import { OrdersOnProdutsService } from './orders-on-produts.service';

describe('OrdersOnProdutsController', () => {
  let controller: OrdersOnProdutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersOnProdutsController],
      providers: [OrdersOnProdutsService],
    }).compile();

    controller = module.get<OrdersOnProdutsController>(OrdersOnProdutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
