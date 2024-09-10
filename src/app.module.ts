import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { OrdersOnProdutsModule } from './orders-on-produts/orders-on-produts.module';
import { ReviewsModule } from './reviews/reviews.module';
import { OrdersModule } from './orders/orders.module';

import dbConfig from 'config/dbConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig]
    }),
    DatabaseModule,
    UserModule,
    ProductsModule,
    ReviewsModule,
    OrdersModule,
    OrdersOnProdutsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
