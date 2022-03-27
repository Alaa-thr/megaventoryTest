import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateTaxDto } from "./dtos/create-tax.dto";
import { UpdateTaxDto } from "./dtos/update-tax.dto";

export class TaxService { 
   
    urlInsertOrUpdate:string;
    urlGet:string;
    apiKey: string

    constructor(apiKey:string){
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/Tax/TaxUpdate'; 
        this.urlGet= 'https://api.megaventory.com/v2017a/Tax/TaxGet'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateTax(mvTax: CreateTaxDto | UpdateTaxDto, mvRecordAction: MVRecordActionEnum){

        const APIKEY = this.apiKey;
        const data = {APIKEY, mvTax, mvRecordAction};
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }

    async getTax(Filters: Object){

        const APIKEY = this.apiKey;
        const data = {APIKEY, Filters};
        const result: any = await axios.post(this.urlGet,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }    
}


 