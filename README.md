# megaventoryTest

In this file you will find the explination of the project.

In this project there's 4 folders, earch one is for each services besides to the enums folder.

index.ts FILE:
- has the tests of all the function in each service.

PRODUCT:
- Product Service:
    - we have 2 attributes:
        * urlInsertOrUpdate: is the url of the responsible api of product insert and update.
        * apiKey: is the apiKey to give us the access to the data in the megaventory website.
    - insertOrUpdateProduct function:
        * is the responsible of creating and updating of the product.
        * has 2 parameters:
            - mvProduct: 
                + contains the information of a product to insert or update(in case if the product already exist).
                + has 2 types: CreateProductDto or UpdateProductDto are a data transfer object that helps the data transfers between classes and contains the attributes of the product. (we can add other attributes easley)
            - mvRecordAction: 
                + is the responsible of the action we want to do => insert or update
                + it's type is MVRecordActionEnum, which is an enum that contains some of the record action used for the megaventory api. (we can add other actions easley)
            * has 3 constants:
                - APIKEY.
                - data: is an object that contains the necessary data for the creation or the updation of a product.
                - result: contains the result of the post request to the megaventory website, and has 2 parameters => data and mvRecordAction(if the mvRecordAction is insert then the request will ask for insert else for update).
            * after sending the request there's a catch => to catch any exception or error sent as a respense from the megaventory website, and then => will execute if ther's no error.
            * this function is "async" which mean that the function returns a promise, and we used it because of existing "await" before the sending of the request.
            * "await" helps to wait until the promise returns a result.

SUPPLIER CLIENT:
- SupplierClient Service:
    - we have 3 attributes:
        * urlGet: is the url of the responsible api of getting a SupplierClient according to some filters.
        * urlInsertOrUpdate.
        * apiKey.
    - insertOrUpdateSupplierClient function:
        * is the responsible of creating and updating of the SupplierClient.
        * has 2 parameters:
            - mvSupplierClient: 
                + contains the information of a SupplierClient to insert or update(in case if the product already exist).
                + has 2 types: CreateSupplierClientDto or UpdateSupplierClientDto.
            - mvRecordAction.
        * has 3 constants:
            - APIKEY.
            - data: is an object that contains the necessary data for the creation or the updation of a SupplierClient.
            - result: contains the result of the post request to the megaventory website, and has 2 parameters => data and mvRecordAction(if the mvRecordAction is insert then the request will ask for insert else for update).
    - getSupplierClient function:
        * is the responsible of getting a SupplierClient according to some filters.
        * has 1 parameter which is an object that contains the filters to get a specific SupplierClient.(a SupplierClient has a unique ID and unique (Name with Type) => to get a specific client).

INVENTORY LOCATION:
- Inventory Location Service:
    - we have 3 attributes:
        * urlGet.
        * urlInsertOrUpdate.
        * apiKey.
    - insertOrUpdateInventoryLocation function:
        * is the responsible of creating and updating of the InventoryLocation.
        * has 2 parameters:
            - mvInventoryLocation: 
                + has 2 types: CreateInventoryLocationDto or UpdateInventoryLocationDto.
            - mvRecordAction.
        * has 3 constants:
            - APIKEY.
            - data.
            - result.
    - getInventoryLocation function:
        * is the responsible of getting a InventoryLocation according to some filters.
        * has 1 parameter which is an object that contains the filters to get a specific InventoryLocation.(a InventoryLocation has a unique ID and unique Abbreviation => to get a specific client).

TAX:
- Tax Service:
    - we have 3 attributes:
        * urlGet.
        * urlInsertOrUpdate.
        * apiKey.
    - insertOrUpdateTax function:
        * is the responsible of creating and updating of the Tax.
        * has 2 parameters:
            - mvTax: 
                + has 2 types: CreateTaxDto or UpdateTaxDto.
            - mvRecordAction.
        * has 3 constants:
            - APIKEY.
            - data.
            - result.
    - getTax function:
        * is the responsible of getting a tax according to some filters.
        * has 1 parameter which is an object that contains the filters to get a specific tax.(a tax has a unique ID and unique unique (Name with Value) => to get a specific tax).

DISCOUNT:
- Discount Service:
    - we have 3 attributes:
        * urlGet.
        * urlInsertOrUpdate.
        * apiKey.
    - insertOrUpdateDiscount function:
        * is the responsible of creating and updating of the Discount.
        * has 2 parameters:
            - mvDiscount: 
                + has 2 types: CreateDiscountDto or UpdateDiscountDto.
            - mvRecordAction.
        * has 3 constants:
            - APIKEY.
            - data.
            - result.
    - getDiscount function:
        * is the responsible of getting a discount according to some filters.
        * has 1 parameter which is an object that contains the filters to get a specific tax.(a discount has a unique ID and unique unique (Name with Value) => to get a specific discount).

SALES ORDER:
- SalesOrder Service:
    - we have 3 attributes:
        * urlGet.
        * urlInsertOrUpdate.
        * apiKey.
    - insertOrUpdateSalesOrder function:
        * is the responsible of creating and updating of the salesOrder.
        * has 2 parameters:
            - mvSalesOrder: 
                + has 2 types: CreateSalesOrderDto or UpdateSalesOrderDto.
            - mvRecordAction.
        * has 3 constants:
            - APIKEY.
            - data.
            - result.
    - getSalesOrderRequiredDataID function:
        * is the responsible of getting the IDs of the required entities to create a SalesOrder such as Product, SupplierClient, Tax, Discount, InventoryLocation.
        * has 2 parameters:
            + salesOrderRequiredData: is an object that contains all the filters to get the specific entitie, does mean the filters to get the product that we want and the supplierClient, tax ...ect.(we use this method in case we don't have the ID of the entitie needed).
            + entities: is an object contains the initialization of the entities, to use them for calling the get functions in each entitie service.
        * has 5 constants:
            - data: has the minimum required information needed to create a salesOrder.
            - taxData: contains the result of getTax function in TaxService which has the Tax that fits the filters.
            - supplierClientData.
            - inventoryLocationData.
            - discountData.
        * and at the end, will return the constant data, and use this constant as a parameter in the function insertOrUpdateSalesOrder to create the salesOrder(see in index.ts).

ENUMS: (we can add new types easly and use them with no changing in code)
- ClientTypeEnum: has the types of the client "SUPPLIER_CLIENT" OR "CLIENT".
- SalesOrderStatusEnum: has some of the types of the sales order status "VALID_STATUS" OR "PENDING" ...ect.
- MVRecordActionEnum: has some of the types of the recordAction "INSERT", "UPDATE"...ect.

SCRIPTS (in package.json): (I added them to make things easy and don't wast time)
- build => to compile the file index.ts.
- start => to execute the file index.ts.
- build_start => to execute both cmd "build" and "start" at the same time.