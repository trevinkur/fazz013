import { Application, Request, Response } from "express";
import ProductRoute from "./products/product.route";
import AppModule from "./app.module";

export default class MainRoute extends AppModule {
    
    private productRoute: ProductRoute
    constructor(
    ) {
        super()
        this.productRoute = new ProductRoute(
            this.productsController, 
            this.responseWrapper, 
            this.productValidator
        )
    }

    public inititalizeRoute(app: Application) {
        app.route("/").get((req: Request, res: Response): Response => {
            return res.send("API is Working!!!")
        })
        this.productRoute.initializeRoute(app)
        
    }
}