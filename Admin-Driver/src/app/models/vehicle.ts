import { VehicleType } from "./vehicle-type";

export class Vehicle {
    numberPlate: string;
    vehicleMake: string;
    vehicleColor: string;
    year: string;
    vehicleName: string;
    vehicleType: VehicleType;


    constructor( numberPlate: string,vehicleMake: string,vehicleColor: string,year: string,vehicleName: string,vehicleType: VehicleType) {
        this.numberPlate = numberPlate;
        this.vehicleMake = vehicleMake;
        this.vehicleColor = vehicleColor;
        this.year = year;
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;

    }
}
