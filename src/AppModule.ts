import { Module } from '@nestjs/common';
import { PaymentModule } from './infrastructure/modules/PaymentModule';

@Module({
  imports: [PaymentModule],
})
export class AppModule {}
