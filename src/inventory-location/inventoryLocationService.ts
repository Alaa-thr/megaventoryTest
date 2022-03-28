import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { ServiceUtils } from "../utils/service-utils";
import { CreateInventoryLocationDto } from "./dtos/create-inventoryLocation.dto";
import { UpdateInventoryLocationDto } from "./dtos/update-inventoryLocation.dto";

export class InventoryLocationService extends ServiceUtils{ 

    constructor(apiKey:string){
        super(apiKey);
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationUpdate'; 
        this.urlGet= 'https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationGet';
    }

    async insertOrUpdateInventoryLocation(mvInventoryLocation: CreateInventoryLocationDto | UpdateInventoryLocationDto, mvRecordAction: MVRecordActionEnum){
       
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvInventoryLocation, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        return this.getResultData(result);
    }

    async getInventoryLocation(Filters: Object){

        const APIKEY = this.apiKey;
        const data = {APIKEY, Filters};
        const result: any = await axios.post(this.urlGet,data)
        return this.getResultData(result);
    }  
}


 