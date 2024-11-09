import { Module } from '@nestjs/common';

import { GetPaymentListenerController } from 'src/infrastructure/adpaters/listeners/CreatePreferenceListenerController';

import { PaymentService } from 'src/application/services/PaymentService';
import { CreatePreferenceUseCaseImpl } from 'src/application/usecases/CreatePreferenceUseCaseImpl';
import { GetPaymentDetailsUseCaseImpl } from 'src/application/usecases/GetPaymentDetailsUseCaseImpl';
import { GetMerchantDetailsUseCaseImpl } from 'src/application/usecases/GetMerchantDetailsUseCaseImpl';
import { PaymentRepositoryAdapter } from 'src/infrastructure/adpaters/repositories/PaymentRepositoryAdapter';

@Module({
    controllers: [GetPaymentListenerController],
    providers: [PaymentService,
        {
            provide: 'CreatePreferenceUseCase',
            useClass: CreatePreferenceUseCaseImpl
        },
        {
            provide: 'GetPaymentDetailsUseCase',
            useClass: GetPaymentDetailsUseCaseImpl
        },
        {
            provide: 'GetMerchantDetailsUseCase',
            useClass: GetMerchantDetailsUseCaseImpl
        },
        {
            provide: 'MercadoPagoRepositoryPort',
            useClass: PaymentRepositoryAdapter
        }
     ],
})
export class PaymentModule {}