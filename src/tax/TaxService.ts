import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateTaxDto } from "./create-tax.dto";
import { UpdateTaxDto } from "./update-tax.dto";

export class TaxService { 
   
    url:string  ;
    apiKey: string

    constructor(apiKey:string){
        this.url= 'https://api.megaventory.com/v2017a/Tax/TaxUpdate'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateTax(mvTax: CreateTaxDto | UpdateTaxDto, mvRecordAction: MVRecordActionEnum){

        const APIKEY = this.apiKey;
        const data = {APIKEY, mvTax, mvRecordAction}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) { // is not entering to it at all cuz all the status is 200
            return {"error":error};
        });
        return {"response":result.data};
    }
}


 