import { ProductDTO } from "src/domain/dtos/ProductDTO";

export interface CreatePreferenceUseCase {
    createPreference(productData: ProductDTO): Promise<string>;
}