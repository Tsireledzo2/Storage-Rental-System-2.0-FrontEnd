import { StorageUnitType } from "./storage-unit-type";

export class StorageUnit {
    unitId: string;
    unitSizeDescription: string;
    storageUnitType:StorageUnitType;


constructor(unitId:string,unitSizeDescription:string,storageUnitType:StorageUnitType){
    this.unitId = unitId;
    this.unitSizeDescription = unitSizeDescription;
    this.storageUnitType = storageUnitType;

}
}
