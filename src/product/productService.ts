import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { ServiceUtils } from "../utils/service-utils";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";

export class ProductService extends ServiceUtils{ 

    constructor(apiKey:string){
        super(apiKey);
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/Product/ProductUpdate';
    }

    async insertOrUpdateProduct(mvProduct: CreateProductDto | UpdateProductDto, mvRecordAction: MVRecordActionEnum){
        const APIKEY = this.apiKey;
        const data = {APIKEY, mvProduct, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        return this.getResultData(result);
    }
}
