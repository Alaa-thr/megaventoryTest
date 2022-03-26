import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateDiscountDto } from "./create-discount.dto";
import { UpdateDiscountDto } from "./update-discount.dto";

export class DiscountService { 
   
    url:string  ;
    apiKey: string

    constructor(apiKey:string){
        this.url= 'https://api.megaventory.com/v2017a/Discount/DiscountUpdate'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateDiscount(mvDiscount: CreateDiscountDto | UpdateDiscountDto, mvRecordAction: MVRecordActionEnum){

        const APIKEY = this.apiKey;
        const data = {APIKEY, mvDiscount, mvRecordAction}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }
}


 