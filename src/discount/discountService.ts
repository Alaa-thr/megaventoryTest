import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { ServiceUtils } from "../utils/service-utils";
import { CreateDiscountDto } from "./dtos/create-discount.dto";
import { UpdateDiscountDto } from "./dtos/update-discount.dto";

export class DiscountService extends ServiceUtils{ 

    constructor(apiKey:string){
        super(apiKey);
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/Discount/DiscountUpdate';
        this.urlGet= 'https://api.megaventory.com/v2017a/Discount/DiscountGet';
    }

    async insertOrUpdateDiscount(mvDiscount: CreateDiscountDto | UpdateDiscountDto, mvRecordAction: MVRecordActionEnum){

        const APIKEY = this.apiKey;
        const data = {APIKEY, mvDiscount, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data);
        return this.getResultData(result);
    }

    async getDiscount(Filters: Object){

        const APIKEY = this.apiKey;
        const data = {APIKEY, Filters};
        const result: any = await axios.post(this.urlGet,data)
        return this.getResultData(result);
    } 
}


 