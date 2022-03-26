import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateProductDto } from "./create-product.dto";
import { UpdateProductDto } from "./update-product.dto";

export class ProductService { 
   
    url:string  ;
    apiKey: string;

    constructor(apiKey:string){
        this.url= 'https://api.megaventory.com/v2017a/Product/ProductUpdate'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateProduct(mvProduct: CreateProductDto | UpdateProductDto, mvRecordAction: MVRecordActionEnum){
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvProduct, mvRecordAction}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) {
            return {"error":error};
        }); 
        return {"response":result.data};
    }
}
