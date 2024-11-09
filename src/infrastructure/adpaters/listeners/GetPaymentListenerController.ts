import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

import { PaymentService } from "src/application/services/PaymentService";

@Controller()
export class GetPaymentListenerController {
    constructor(
        private readonly paymentService: PaymentService
    ) {}

    @MessagePattern('get-payment')
    public getPayment (@Payload() order_uuid: string) {
        this.paymentService.getPaymentOrder(order_uuid);
    }
}