import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";

export class ProductService { 
   
    urlInsertOrUpdate:string  ;
    apiKey: string;

    constructor(apiKey:string){
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/Product/ProductUpdate'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateProduct(mvProduct: CreateProductDto | UpdateProductDto, mvRecordAction: MVRecordActionEnum){
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvProduct, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        .catch(function (error) {
            return {"error":error};
        }); 
        return {"response":result.data};
    }
}
