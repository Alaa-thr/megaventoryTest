import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { CreateInventoryLocationDto } from "./create-inventoryLocation.dto";
import { UpdateInventoryLocationDto } from "./update-inventoryLocation.dto";

export class InventoryLocationService { 
   
    url:string  ;
    apiKey: string

    constructor(apiKey:string){
        this.url= 'https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationUpdate'; 
        this.apiKey = apiKey; 
    }

    async insertOrUpdateInventoryLocation(mvInventoryLocation: CreateInventoryLocationDto | UpdateInventoryLocationDto, mvRecordAction: MVRecordActionEnum){
       
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvInventoryLocation, mvRecordAction}
        const result: any = await axios.post(this.url,data)
        .catch(function (error) {
            return {"error":error};
        });
        return {"response":result.data};
    }
}


 