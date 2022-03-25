import { ClientTypeEnum } from "../enums/client-type.enum";

export class UpdateSupplierClientDto {

    supplierClientId: number;
    supplierClientName: string;
    supplierClientShippingAddress1: string;
    supplierClientPhone1: string;
    supplierClientEmail: string;
    supplierClientType: ClientTypeEnum;

}