import { ProductDTO } from "src/domain/dtos/ProductDTO";
import { MerchantOrderResponse } from "mercadopago/dist/clients/merchantOrder/commonTypes";
import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

export interface PaymentRepository {
    createPreferences(product: ProductDTO): Promise<string>;
    getPaymentOrder(id_payment: string): Promise<PaymentResponse>;
    getMerchantOrder(id_order: string): Promise<MerchantOrderResponse>;
}