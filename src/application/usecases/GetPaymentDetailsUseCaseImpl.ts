import { GetPaymentDetailsUseCase } from "src/domain/ports/in/GetPaymentDetailsUseCase";
import { PaymentRepository } from "src/domain/ports/out/PaymentRepository";
import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class GetPaymentDetailsUseCaseImpl implements GetPaymentDetailsUseCase {
    constructor(
        @Inject('MercadoPagoRepositoryPort') private readonly paymentRepository: PaymentRepository
    ){}

    public async getPaymentOrder(payment_id: string): Promise<PaymentResponse> {
        return await this.paymentRepository.getPaymentOrder(payment_id);
    }
}