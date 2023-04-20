import { ProductEntities } from "../products/entities/product.entities";

export interface IResponse {
    message: string,
    statusCode: number,
    data: unknown[] 
}

export interface IProductResponse extends IResponse {
    data: ProductEntities[]
}

// export interface IException {
//     statusCode: number,
//     detail: unk
// }

export function isProductResponse(response: IResponse): response is IProductResponse { 
    if(response.data[0] !== null && typeof response.data[0] === "object"  ) {
        return "description" in response.data[0]
    }
    return false
}  