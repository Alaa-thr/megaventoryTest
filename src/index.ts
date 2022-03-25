import { ProductService } from "./product/productService";
import { SupplierClientService } from "./supplier-client/SupplierClientService"
import { ClientTypeEnum } from "./enums/client-type.enum"
const apiKey = '758f571e0be2d57e@m128349';

const productService = new ProductService(apiKey);
const productCreate = {
    productSKU:"000022",
    productDescription:"Blue Hat",
    productSellingPrice:99,
    productPurchasePrice:55.09
};
const productUpdate = {
    productID: 27,
    productSKU:"1112300",
    productDescription:"Shoes HR"
};
/*productService.insertProduct(productCreate).then(function (response){
    console.log(response);
});
productService.updateProduct(productUpdate).then(function (response){
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
    supplierClientName: "alaa",
    supplierClientEmail: "babis@exampletest.com",
    supplierClientShippingAddress1: "Example 2, Piraeus ",
    supplierClientPhone1: "1235698967",
    supplierClientType: ClientTypeEnum.SUPPLIER_CLIENT
}
/*supplierClient.insertSupplierClient(createSupplerClient).then(function (response){
             console.log(response);
});
supplierClient.updateSupplierClient(updateSupplerClient).then(function (response){
    console.log(response);
});*/