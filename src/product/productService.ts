import axios from "axios";
import { CreateProductDto } from "./create-product.dto";
import { UpdateProductDto } from "./update-product.dto";

class ProductService { 
   
    data: Object;

    async insertProduct(product: CreateProductDto, apiKey: string){

        this.data = {"APIKEY": apiKey,"mvProduct":product}
        const result: any = await axios.post('https://api.megaventory.com/v2017a/json/reply/ProductUpdate',this.data)
        .catch(function (error) {
            return {"error":error};
        }); 
        return {"response":result.data};
    }

    async updateProduct(product: UpdateProductDto, apiKey: string){
       
        this.data = {"APIKEY": apiKey,"mvProduct":product,"mvRecordAction": "Update"}
        const result: any = await axios.post('https://api.megaventory.com/v2017a/json/reply/ProductUpdate',this.data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }
 }

 