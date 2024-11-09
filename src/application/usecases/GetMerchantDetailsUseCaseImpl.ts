import { GetOrderDetailsUseCase } from "src/domain/ports/in/GetOrderDetailsUseCase";
import { PaymentRepository } from "src/domain/ports/out/PaymentRepository";
import { MerchantOrderResponse } from "mercadopago/dist/clients/merchantOrder/commonTypes";

import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class GetMerchantDetailsUseCaseImpl implements GetOrderDetailsUseCase {
    constructor(
        @Inject('MercadoPagoRepositoryPort') private readonly paymentRepository: PaymentRepository
    ){}

    public async getMerchantOrder(order_id: string): Promise<MerchantOrderResponse> {
        return await this.paymentRepository.getMerchantOrder(order_id);
    }
}