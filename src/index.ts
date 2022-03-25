import { ProductService } from "./product/productService";

const apiKey = '758f571e0be2d57e@m128349';
const productService = new ProductService();
const productCreate = {"productSKU":"000011",'productDescription':"Red Hat",'productSellingPrice':100.99,'productPurchasePrice':55.09};
const productUpdate = {"productID": 27,"productSKU":"1112300",'productDescription':"T-shirtrr"};productService.insertProduct(productCreate,apiKey).then(function (response){
        console.log(response);
    });