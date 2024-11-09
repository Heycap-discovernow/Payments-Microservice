import { ProductDTO } from "src/domain/dtos/ProductDTO";
import { CreatePreferenceUseCase } from "src/domain/ports/in/CreatePreferenceUseCase";
import { PaymentRepository } from "src/domain/ports/out/PaymentRepository";

import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CreatePreferenceUseCaseImpl implements CreatePreferenceUseCase {
    constructor(
        @Inject('MercadoPagoRepositoryPort') private readonly paymentRepository: PaymentRepository
    ){}

    public async createPreference(productData: ProductDTO): Promise<string> {
        return this.paymentRepository.createPreferences(productData);
    }
}