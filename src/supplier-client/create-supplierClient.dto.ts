import { ClientTypeEnum } from "../enums/client-type.enum";

export class CreateSupplierClientDto {

    supplierClientName: string;
    supplierClientEmail: string;
    supplierClientShippingAddress1: string;
    supplierClientPhone1: string;
    supplierClientType: ClientTypeEnum;
}