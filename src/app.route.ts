import { Application, Request, Response } from "express";
import ProductRoute from "./products/product.route";
import AppModule from "./app.module";
import { password } from "./config/env";

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
        console.log(password)
        this.productRoute.initializeRoute(app)
        
    }
}