import { Pool, QueryResult } from "pg";
import { CreateProductDTO, UpdateProductDTO } from "./dto/products.dto";
import { ProductEntities, isProductEntities } from "./entities/product.entities";

export default class ProductService {
    
    constructor(
        private db: Pool
    ) {

    }

    async findAll() {
        const sql = "SELECT * FROM product"
        const result: QueryResult = await this.db.query(sql)
        const data: unknown[] = result.rows
        if(isProductEntities(data)) {
            return data
        }
        return []
    }

    async findOne(id: number) {
        const sql = "SELECT * FROM product WHERE id = $1"
        const result: QueryResult = await this.db.query(sql, [id])
        const data: unknown[] = result.rows
        if(isProductEntities(data)) {
            return data
        }
        return []
    }

    async create(body: CreateProductDTO): Promise<ProductEntities[]> {
        const sql  = `INSERT INTO product(product_name, product_price, description) VALUES($1,$2,$3) 
                    RETURNING id, product_name, product_price, description`
        const result: QueryResult = await this.db.query(sql, [body.product_name, Number(body.product_price), body.description])
        const data: unknown[] = result.rows
        if(isProductEntities(data)) {
            return data
        }
        return []
    }

    async update(body: UpdateProductDTO, id: number): Promise<ProductEntities[]> {
        const sql = `UPDATE product SET product_name = $1, product_price = $2, description = $3
                    WHERE id = $4
                    RETURNING id, product_name, product_price, description
        `
        const oldData = await this.findOne(id)
        const product_name = body.product_name || oldData[0].product_name
        const product_price = body.product_price || oldData[0].product_price
        const description = body.description || oldData[0].description
        const result = await this.db.query(sql, [product_name, product_price, description, id])
        const data: unknown[] = result.rows
        if(isProductEntities(data)) {
            return data
        }
        return []
    }
    
    async remove(id: number): Promise<ProductEntities[]> {
        const sql = `DELETE FROM product WHERE id = $1 RETURNING id, product_name, product_price, description`
        const result = await this.db.query(sql, [id])
        const data: unknown[] = result.rows
        if(isProductEntities(data)) {
            return data
        }
        return []
    }
}