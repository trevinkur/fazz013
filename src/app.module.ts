import { pool } from "./connection/pg";
import { ProductValidator } from "./products/product.validator";
import ProductsController from "./products/products.controller";
import ProductService from "./products/products.service";
import { ResponseWrapper } from "./utils/responseWrapper";

export default class AppModule {
    constructor(
        // protected pg: Pg = new Pg(),
        protected productValidator: ProductValidator = new ProductValidator(),
        protected productService: ProductService = new ProductService(pool),
        protected productsController: ProductsController = new ProductsController(productService),
        protected responseWrapper: ResponseWrapper = new ResponseWrapper()
    ) {

    }
}