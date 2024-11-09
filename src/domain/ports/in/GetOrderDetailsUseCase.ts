import { MerchantOrderResponse } from "mercadopago/dist/clients/merchantOrder/commonTypes";

export interface GetOrderDetailsUseCase {
    getMerchantOrder(order_id: string): Promise<MerchantOrderResponse>;
}