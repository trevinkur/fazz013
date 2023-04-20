export type CreateProductDTO = {
    description: string,
    product_name: string,
    product_price: number
}

export function isCreateProductDTO(object: unknown): object is CreateProductDTO {
    
    if(object !== null && typeof object === "object") {
        return "product_name" in object && 
        "product_price" in object &&
        "description" in object
    }
    return false
}

export type UpdateProductDTO = {
    description?: string,
    product_name?: string,
    product_price?: number
}