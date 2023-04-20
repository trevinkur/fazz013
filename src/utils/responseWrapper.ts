import { IResponse } from "./interface";

export class ResponseWrapper {
    
    public success(data: unknown[]): IResponse {
        return {
            message: "success",
            statusCode: 200,
            data: data
        }
    }

    public exception(err: IResponse , message: string): IResponse {
        return {
            message,
            statusCode: err.statusCode,
            data: err.data
        }
    }
    
}