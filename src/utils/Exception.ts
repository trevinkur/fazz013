import { IResponse } from "./interface"

export class Exception extends Error {
    public statusCode: number
    public data: unknown[]
    constructor(err: IResponse) {
        super(err.message)
        this.statusCode = err.statusCode
        this.data = err.data
    }
}