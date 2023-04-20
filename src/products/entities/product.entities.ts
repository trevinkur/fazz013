export interface ProductEntities {
    id?: number;
    product_name: string;
    product_price: number;
    description: string;
}

export function isProductEntities(object: unknown[]): object is ProductEntities[] {
    if(object[0] !== null && typeof object[0] === "object") {
        return "product_name" in object[0]
    }
    return false
}