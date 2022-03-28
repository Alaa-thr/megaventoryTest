import axios from "axios";
import { MVRecordActionEnum } from "../enums/mv-record-action.enum";
import { SalesOrderStatusEnum } from "../enums/sales-order-status.enum";
import { ServiceUtils } from "../utils/service-utils";
import { CreateSalesOrderDto } from "./dtos/create-salesOrder.dto";
import { UpdateSalesOrderDto } from "./dtos/update-salesOrder.dto";

export class SalesOrderService extends ServiceUtils{ 

    constructor(apiKey:string){
        super(apiKey);
        this.urlInsertOrUpdate= 'https://api.megaventory.com/v2017a/SalesOrder/SalesOrderUpdate'; 
    }

    async insertOrUpdateSalesOrder(mvSalesOrder: CreateSalesOrderDto | UpdateSalesOrderDto, mvRecordAction: MVRecordActionEnum){

        const APIKEY = this.apiKey;
        const data = {APIKEY, mvSalesOrder, mvRecordAction}
        const result: any = await axios.post(this.urlInsertOrUpdate,data)
        return this.getResultData(result);
    }
    
    async getSalesOrderRequiredDataID(salesOrderRequiredData: any, entities: any){

        const data = {
            salesOrderStatus: SalesOrderStatusEnum.VERIFIED,
            salesOrderDetails: {
                salesOrderRowProductSKU: "1112256",
                salesOrderRowTaxID: 0,
                SalesOrderRowQuantity: 10,
                salesOrderRowDiscountID: 0
            },
            salesOrderInventoryLocationID: 0,
            salesOrderClientID: 0
        };
        
        const taxData = await entities.tax.getTax(salesOrderRequiredData.tax);
        data.salesOrderDetails.salesOrderRowTaxID = taxData.response.mvTaxes[0].TaxID;

        const supplierClientData = await entities.supplierClient.getSupplierClient(salesOrderRequiredData.supplierClient);
        data.salesOrderClientID = supplierClientData.response.mvSupplierClients[0].SupplierClientID;

        const inventoryLocationData = await entities.inventoryLocation.getInventoryLocation(salesOrderRequiredData.inventoryLocation);
        data.salesOrderInventoryLocationID = inventoryLocationData.response.mvInventoryLocations[0].InventoryLocationID;
   
        const discountData = await entities.discount.getDiscount(salesOrderRequiredData.getDiscount);
        data.salesOrderDetails.salesOrderRowDiscountID = discountData.response.mvDiscounts[0].DiscountID;

        return data;
    }
}


 