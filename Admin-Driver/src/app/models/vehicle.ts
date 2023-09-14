import { VehicleType } from "./vehicle-type";

export class Vehicle {
    numberPlate: string;
    vehicleMake: string;
    vehicleColor: string;
    year: string;
    vehicleName: string;
    vehicleType: VehicleType;


    constructor(vehicleType: VehicleType) {
        this.numberPlate = "";
        this.vehicleMake = "";
        this.vehicleColor = "";
        this.year = "";
        this.vehicleName = "";
        this.vehicleType = vehicleType;

    }
}
