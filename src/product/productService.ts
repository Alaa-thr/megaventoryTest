import axios from "axios";
import { CreateProductDto } from "./create-product.dto";
import { UpdateProductDto } from "./update-product.dto";

export class ProductService { 
   
    url:string  ;
    apiKey: string;

    constructor(apiKey:string){
        this.url= 'https://api.megaventory.com/v2017a/Product/ProductUpdate'; 
        this.apiKey = apiKey; 
    }

    async insertProduct(product: CreateProductDto){

        const data = {"APIKEY": this.apiKey,"mvProduct":product}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) {
            return {"error":error};
        }); 
        return {"response":result.data};
    }

    async updateProduct(product: UpdateProductDto){
       
        const data = {"APIKEY": this.apiKey,"mvProduct":product,"mvRecordAction": "Update"}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }
}
