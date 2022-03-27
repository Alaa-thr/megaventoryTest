import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateSupplierClientDto } from "./dtos/create-supplierClient.dto";
import { UpdateSupplierClientDto } from "./dtos/update-supplierClient.dto";

export class SupplierClientService { 
   
    urlInsertOrUpdate:string;
    urlGet:string;
    apiKey: string;

    constructor(apiKey:string){
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/SupplierClient/SupplierClientUpdate';
        this.urlGet= 'https://api.megaventory.com/v2017a/SupplierClient/SupplierClientGet'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateSupplierClient(mvSupplierClient: UpdateSupplierClientDto | CreateSupplierClientDto , mvRecordAction: MVRecordActionEnum){
       
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvSupplierClient, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }

    async getSupplierClient(Filters: Object){

        const APIKEY = this.apiKey;
        const data = {APIKEY, Filters};
        const result: any = await axios.post(this.urlGet,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }  
}


 