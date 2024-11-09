import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

export interface GetPaymentDetailsUseCase {
    getPaymentOrder(payment_id: string): Promise<PaymentResponse>;
}