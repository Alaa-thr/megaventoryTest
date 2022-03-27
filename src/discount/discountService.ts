import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateDiscountDto } from "./dtos/create-discount.dto";
import { UpdateDiscountDto } from "./update-discount.dto";

export class DiscountService { 
   
    urlInsertOrUpdate:string;
    urlGet:string;
    apiKey: string

    constructor(apiKey:string){
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/Discount/DiscountUpdate';
        this.urlGet= 'https://api.megaventory.com/v2017a/Discount/DiscountGet'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateDiscount(mvDiscount: CreateDiscountDto | UpdateDiscountDto, mvRecordAction: MVRecordActionEnum){

        const APIKEY = this.apiKey;
        const data = {APIKEY, mvDiscount, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }

    async getDiscount(Filters: Object){

        const APIKEY = this.apiKey;
        const data = {APIKEY, Filters};
        const result: any = await axios.post(this.urlGet,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }  
}


 