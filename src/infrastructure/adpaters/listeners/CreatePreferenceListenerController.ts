import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

import { PaymentService } from "src/application/services/PaymentService";
import { ProductDTO } from "src/domain/dtos/ProductDTO";

@Controller()
export class GetPaymentListenerController {
    constructor(
        private readonly paymentService: PaymentService
    ) {}

    @MessagePattern('create-order')
    public getPayment (@Payload() product: ProductDTO) {
        this.paymentService.createPreference(product);
    }
}