import { ClientTypeEnum } from "../enums/client-type.enum";

export class UpdateInventoryLocationDto {

    inventoryLocationID: number;
    inventoryLocationAbbreviation: string;
    inventoryLocationName: string;
    inventoryLocationAddress: string;

}