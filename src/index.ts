import { ProductService } from "./product/productService";
import { SupplierClientService } from "./supplier-client/SupplierClientService"
import { ClientTypeEnum } from "./enums/client-type.enum"
const apiKey = '758f571e0be2d57e@m128349';

const productService = new ProductService();
const productCreate = {
    productSKU:"000011",
    productDescription:"Red Hat",
    productSellingPrice:100.99,
    productPurchasePrice:55.09
};
const productUpdate = {
    productID: 27,
    productSKU:"1112300",
    productDescription:"T-shirtrr"
};
/*productService.insertProduct(productCreate,apiKey).then(function (response){
    console.log(response);
});
productService.updateProduct(productUpdate,apiKey).then(function (response){
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