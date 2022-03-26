import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateSupplierClientDto } from "./create-supplierClient.dto";
import { UpdateSupplierClientDto } from "./update-supplierClient.dto";

export class SupplierClientService { 
   
    url:string  ;
    apiKey: string

    constructor(apiKey:string){
        this.url= 'https://api.megaventory.com/v2017a/SupplierClient/SupplierClientUpdate'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateSupplierClient(mvSupplierClient: UpdateSupplierClientDto | CreateSupplierClientDto , mvRecordAction: MVRecordActionEnum){
       
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvSupplierClient, mvRecordAction}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }
}


 