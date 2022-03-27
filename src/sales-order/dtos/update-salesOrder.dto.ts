
export class UpdateSalesOrderDto {

    salesOrderId: number;
    salesOrderStatus: string;
    salesOrderDetails: {
        salesOrderRowProductSKU: string,
        salesOrderRowTaxID: number,
        SalesOrderRowQuantity: number,
        salesOrderRowDiscountID: number
    };
    salesOrderInventoryLocationID: number;
    salesOrderClientID: number;

}