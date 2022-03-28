import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { ServiceUtils } from "../utils/service-utils";
import { CreateSupplierClientDto } from "./dtos/create-supplierClient.dto";
import { UpdateSupplierClientDto } from "./dtos/update-supplierClient.dto";

export class SupplierClientService extends ServiceUtils{ 

    constructor(apiKey:string){
        super(apiKey);
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/SupplierClient/SupplierClientUpdate';
        this.urlGet= 'https://api.megaventory.com/v2017a/SupplierClient/SupplierClientGet';
    }

    async insertOrUpdateSupplierClient(mvSupplierClient: UpdateSupplierClientDto | CreateSupplierClientDto , mvRecordAction: MVRecordActionEnum){
       
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvSupplierClient, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        return this.getResultData(result);
    }

    async getSupplierClient(Filters: Object){

        const APIKEY = this.apiKey;
        const data = {APIKEY, Filters};
        const result: any = await axios.post(this.urlGet,data)
        return this.getResultData(result);
    }  
}


 