import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateInventoryLocationDto } from "./create-inventoryLocation.dto";
import { UpdateInventoryLocationDto } from "./update-inventoryLocation.dto";

export class InventoryLocationService { 
   
    urlInsertOrUpdate:string;
    urlGet:string;
    apiKey: string

    constructor(apiKey:string){
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationUpdate'; 
        this.urlGet= 'https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationGet'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateInventoryLocation(mvInventoryLocation: CreateInventoryLocationDto | UpdateInventoryLocationDto, mvRecordAction: MVRecordActionEnum){
       
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvInventoryLocation, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }

    async getInventoryLocation(Filters: Object){

        const APIKEY = this.apiKey;
        const data = {APIKEY, Filters};
        const result: any = await axios.post(this.urlGet,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }  
}


 