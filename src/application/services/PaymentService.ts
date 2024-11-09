//this file is to define the use cases and meet the single responsibility principle and the dependency inversion principle
import { ProductDTO } from "src/domain/dtos/ProductDto";
import { CreatePreferenceUseCase } from "src/domain/ports/in/CreatePreferenceUseCase";
import { GetOrderDetailsUseCase } from "src/domain/ports/in/GetOrderDetailsUseCase";
import { GetPaymentDetailsUseCase } from "src/domain/ports/in/GetPaymentDetailsUseCase";

import { Injectable, Inject } from "@nestjs/common";

import { MerchantOrderResponse } from "mercadopago/dist/clients/merchantOrder/commonTypes";
import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

@Injectable()
export class PaymentService implements CreatePreferenceUseCase, GetOrderDetailsUseCase, GetPaymentDetailsUseCase {
    constructor(
       @Inject('CreatePreferenceUseCase') private readonly createPreferenceUseCase: CreatePreferenceUseCase,
       @Inject('GetPaymentDetailsUseCase') private readonly getOrderDetailsUseCase: GetOrderDetailsUseCase,
       @Inject('GetMerchantDetailsUseCase') private readonly getPaymentDetailsUseCase: GetPaymentDetailsUseCase
    ){}

    public createPreference(productData: ProductDTO): Promise<string> {
        return this.createPreferenceUseCase.createPreference(productData);
    }

    public getMerchantOrder(order_id: string): Promise<MerchantOrderResponse> {
        return this.getOrderDetailsUseCase.getMerchantOrder(order_id);
    }

    public getPaymentOrder(payment_id: string): Promise<PaymentResponse> {
        return this.getPaymentDetailsUseCase.getPaymentOrder(payment_id);
    }
}