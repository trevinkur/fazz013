import { Request } from "express"
import { Exception } from "../utils/Exception"
import { CreateProductDTO, UpdateProductDTO, isCreateProductDTO } from "./dto/products.dto"

export class ProductValidator {

    public async create(req: Request): Promise<CreateProductDTO> {
        const err = []
        if(!("product_name" in req.body)) {
            err.push("product_name must be fill!")
        }
        if(("product_price" in req.body)) {     
            isNaN(Number(req.body.product_price)) ? 
            err.push("Product Price  must be a number") : 
            req.body.product_price = parseInt(req.body.product_price) 
            
        } else {
            err.push("product_price must be fill!")
        }
        if(!("description" in req.body)) {
            err.push("product_name must be fill!")
        }

        if(err.length > 0) {
            throw new Exception({
                message: "validatiion Error",
                statusCode: 400,
                data: err
            })
        }

        if(isCreateProductDTO(req.body)) {
            return req.body
        }

        return req.body
    }

    public async update(req: Request): Promise<UpdateProductDTO> {
        const err = []
        if(
            ("description" in req.body) || 
            ("product_price" in req.body) || 
            ("product_name" in req.body) ) {
                if(("product_price" in req.body)) {
                    isNaN(Number(req.body.product_price)) ? 
                    err.push("Product Price  must be a number") : 
                    req.body.product_price = parseInt(req.body.product_price)
                }
            return req.body as UpdateProductDTO
        } else {
            err.push("description or product_price or product_name must be fill")
            throw new Exception({
                message: "validatiion Error",
                statusCode: 400,
                data: err
            })
        }

    }
}