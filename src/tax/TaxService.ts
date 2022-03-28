import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { ServiceUtils } from "../utils/service-utils";
import { CreateTaxDto } from "./dtos/create-tax.dto";
import { UpdateTaxDto } from "./dtos/update-tax.dto";

export class TaxService extends ServiceUtils{ 

    constructor(apiKey:string){
        super(apiKey);
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/Tax/TaxUpdate'; 
        this.urlGet= 'https://api.megaventory.com/v2017a/Tax/TaxGet';
    }

    async insertOrUpdateTax(mvTax: CreateTaxDto | UpdateTaxDto, mvRecordAction: MVRecordActionEnum){

        const APIKEY = this.apiKey;
        const data = {APIKEY, mvTax, mvRecordAction};
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        return this.getResultData(result);
    }

    async getTax(Filters: Object){

        const APIKEY = this.apiKey;
        const data = {APIKEY, Filters};
        const result: any = await axios.post(this.urlGet,data)
        return this.getResultData(result);
    }    
}


 