import axios from "axios";
import { CreateSupplierClientDto } from "./create-supplierClient.dto";
import { UpdateSupplierClientDto } from "./update-supplierClient.dto";

export class SupplierClientService { 
   
    url:string  ;
    apiKey: string

    constructor(apiKey:string){
        this.url= 'https://api.megaventory.com/v2017a/SupplierClient/SupplierClientUpdate'; 
        this.apiKey = apiKey; 
    }

    async insertSupplierClient(supplierClient: CreateSupplierClientDto){
       
        const data = {"APIKEY": this.apiKey,"mvSupplierClient":supplierClient}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }

    async updateSupplierClient(supplierClient: UpdateSupplierClientDto){
       
        const data = {"APIKEY": this.apiKey,"mvSupplierClient":supplierClient,"mvRecordAction": "Update"}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }
}


 