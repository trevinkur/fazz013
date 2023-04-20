import { Application, Request, Response } from "express";
import ProductsController from "./products.controller";
import { IResponse, isProductResponse } from "../utils/interface";
import { ResponseWrapper } from "../utils/responseWrapper";
import { ProductValidator } from "./product.validator";

export default class ProductRoute {
    private path:string = "/v1/product"
    constructor(
        private productController: ProductsController,
        private responseWrapper: ResponseWrapper,
        private productValidator: ProductValidator
        ) {
    }

    public initializeRoute(app: Application) {
        app.route(this.path)
        .get(async (req: Request, res: Response): Promise<Response> => {
            const result = await this.productController.findAll()
            const response = this.responseWrapper.success(result)
            if(isProductResponse(response)) {
                return res.send(response)
            }
            return res.send(response)
        })

        app.route(this.path)
        .post(async (req: Request, res: Response): Promise<Response> => {
            try {
                const body = await this.productValidator.create(req)
                const result = await this.productController.create(body)
                const response = this.responseWrapper.success(result)
                if(isProductResponse(response)) {
                    return res.send(response)
                }
                return res.send(response)
            } catch(_err) {
                const err: IResponse = _err as IResponse
                return res.send(this.responseWrapper.exception(err, err.message))
            }
        })

        app.route(this.path + "/:id")
        .patch(async (req: Request, res: Response): Promise<Response> => {
            try {
                
                const body = await this.productValidator.update(req)
                const result = await this.productController.update(body, Number(req.params.id))
                const response = this.responseWrapper.success(result)
                if(isProductResponse(response)) {
                    return res.send(response)
                }
                return res.send(response)
            } catch(_err) {
                const err: IResponse = _err as IResponse
                return res.send(this.responseWrapper.exception(err, err.message))
            }
        })

        app.route(this.path + "/:id")
        .delete(async (req: Request, res: Response): Promise<Response> => {
            const result = await this.productController.remove(Number(req.params.id))
            const response = this.responseWrapper.success(result)
            if(isProductResponse(response)) {
                return res.send(response)
            }
            return res.send(response)
        })
    }
}