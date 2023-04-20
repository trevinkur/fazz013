import { CreateProductDTO, UpdateProductDTO } from "./dto/products.dto";
import { ProductEntities } from "./entities/product.entities";
import ProductService from "./products.service";

export default class ProductsController {
   constructor(private productService: ProductService) {}
   
   public async findAll(): Promise<ProductEntities[]|[]> {
        return await this.productService.findAll()
   }

   public async create(body: CreateProductDTO): Promise<any> {
      return await this.productService.create(body)
   }

   async update(body: UpdateProductDTO, id: number): Promise<ProductEntities[]> {
      return await this.productService.update(body, id)
   }

   async remove(id: number) {
      return await this.productService.remove(id)
   }
}