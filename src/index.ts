import { ProductService } from "./product/productService";
import { SupplierClientService } from "./supplier-client/SupplierClientService"
import { ClientTypeEnum } from "./enums/client-type.enum"
import { MVRecordActionEnum } from "./enums/mv-record-action.enum";
import { InventoryLocationService } from "./inventory-location/inventoryLocationService";
import { TaxService } from "./tax/taxService";
import { DiscountService } from "./discount/discountService";
import { SalesOrderService } from "./sales-order/salesOrderService";
import { SalesOrderStatusEnum } from "./enums/sales-order-status.enum";

const apiKey = '758f571e0be2d57e@m128349';
const mvRecordActionInsert= MVRecordActionEnum.INSERT;
const mvRecordActionUpdate= MVRecordActionEnum.UPDATE;
const salesOrderStatusVerified = SalesOrderStatusEnum.VERIFIED;

const product = new ProductService(apiKey);
const productCreate = {
    productSKU:"1112256",
    productDescription:"Nike shoes",
    productSellingPrice:99.99,
    productPurchasePrice:44.99
};
const productUpdate = {
    productID: 27,
    productSKU:"1112304",
    productDescription:"T-shirt HR"
};
/*product.insertOrUpdateProduct(productCreate,mvRecordActionInsert).then(function (response){
    console.log(response);
});
product.insertOrUpdateProduct(productUpdate,mvRecordActionUpdate).then(function (response){
    console.log(response);
});*/


const supplierClient = new SupplierClientService(apiKey);
const createSupplerClient = {
    supplierClientName: "babis",
    supplierClientEmail: "babis@exampletest.com",
    supplierClientShippingAddress1: "Example 8, Athens ",
    supplierClientPhone1: "1235698967",
    supplierClientType: ClientTypeEnum.CLIENT
}
const updateSupplerClient = {
    supplierClientId: 5,
    supplierClientName: "chiraz",
    supplierClientEmail: "chiraz@exampletest.com",
    supplierClientShippingAddress1: "Example 2, Piraeus ",
    supplierClientPhone1: "1235698967",
    supplierClientType: ClientTypeEnum.SUPPLIER_CLIENT
}
/*supplierClient.insertOrUpdateSupplierClient(createSupplerClient, mvRecordActionInsert).then(function (response){
             console.log(response);
});
supplierClient.insertOrUpdateSupplierClient(updateSupplerClient,mvRecordActionUpdate).then(function (response){
    console.log(response);
});*/

const inventoryLocation = new InventoryLocationService(apiKey);
const createInventoryLocation = {
    inventoryLocationAbbreviation: "Test",
    inventoryLocationName: "Test Project Location",
    inventoryLocationAddress: "Example 20, Athens "
}
const updateInventoryLocation = {
    inventoryLocationID: 3,
    inventoryLocationAbbreviation: "Te3",
    inventoryLocationName: "Test Project Location 3",
    inventoryLocationAddress: "Example 23, Atica "
}
/*inventoryLocation.insertOrUpdateInventoryLocation(createInventoryLocation, mvRecordActionInsert).then(function (response){
             console.log(response);
});
inventoryLocation.insertOrUpdateInventoryLocation(updateInventoryLocation,mvRecordActionUpdate).then(function (response){
    console.log(response);
});*/

const tax = new TaxService(apiKey);
const createTax = {
    taxName: "VAT2",
    taxDescription: "VAT GR",
    taxValue: 25,
}
const updateTax = {
    taxID: 5,
    taxName: "VAT3",
    taxDescription: "SAT GR",
    taxValue: 23,
}
/*tax.insertOrUpdateTax(createTax, mvRecordActionInsert).then(function (response){
             console.log(response);
});
tax.insertOrUpdateTax(updateTax,mvRecordActionUpdate).then(function (response){
    console.log(response);
});*/

const discount = new DiscountService(apiKey);
const createDiscount = {
    discountName: "Loyalty1",
    discountDescription: "Loyalty Customer Discount",
    discountValue: 51,
}
const updateDiscount = {
    discountID: 7,
    discountName: "Loyalty",
    discountDescription: "Loyalty Customer Discount 1",
    discountValue: 58,
}
/*discount.insertOrUpdateDiscount(createDiscount, mvRecordActionInsert).then(function (response){
             console.log(response);
});
discount.insertOrUpdateDiscount(updateDiscount,mvRecordActionUpdate).then(function (response){
    console.log(response);
});*/


const salesOrder = new SalesOrderService(apiKey);

const salesOrderRequiredData = {
    tax:[
        {
            fieldName: "TaxName",
            searchOperator: "Equals",
            searchValue: "VAT",
        },
        {
            andOr: "And",
            fieldName: "TaxValue",
            searchOperator: "Equals",
            searchValue: "24",
    
        }
    ],
    supplierClient:[
        {
            fieldName: "SupplierClientType",
            searchOperator: "Equals",
            searchValue: ClientTypeEnum.CLIENT,
        },
        {
            andOr: "And",
            fieldName: "SupplierClientName",
            searchOperator: "Equals",
            searchValue: "babis",
    
        }
    ],
    inventoryLocation:[
        {
            fieldName: "InventoryLocationAbbreviation",
            searchOperator: "Equals",
            searchValue: "Test",
        }
    ],
    discount:[
        {
            fieldName: "discountName",
            searchOperator: "Equals",
            searchValue: "Loyalty",
        },
        {
            andOr: "And",
            fieldName: "discountValue",
            searchOperator: "Equals",
            searchValue: 50,
        }
    ]
}
const entities = {
    tax: tax,
    supplierClient: supplierClient,
    inventoryLocation: inventoryLocation,
    discount: discount
};

/*salesOrder.getSalesOrderRequiredDataID(salesOrderRequiredData, entities).then(function(response){

    salesOrder.insertOrUpdateSalesOrder(response,mvRecordActionInsert).then(function(response){
        console.log(response);
    });
});*/


