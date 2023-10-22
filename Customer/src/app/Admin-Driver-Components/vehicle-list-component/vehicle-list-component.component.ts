import { Component } from '@angular/core';
import { DataService } from 'src/app/services-ad-dri/data.service';
import { Vehicle } from 'src/app/models-ad-dri/vehicle';
import { VehicleType } from 'src/app/models-ad-dri/vehicle-type';

@Component({
  selector: 'app-vehicle-list-component',
  templateUrl: './vehicle-list-component.component.html',
  styleUrls: ['./vehicle-list-component.component.css']
})
export class VehicleListComponentComponent {
   vehicle: Vehicle[] = [];
   
   newVehicleType: VehicleType = new VehicleType();
   newVehicle: Vehicle = new Vehicle(this.newVehicleType);

   vehicleMake : string = '';
   vehicleColor : string = '';
   numberPlate: string = '';
   vehicleName: string = '';
   year : string = '';
   capacity : string = '';
   vehiclePrice : string = '';

  
  constructor(private dataService: DataService) {}

 
  ngOnInit(): void {
    this.fetchVehicleType();
    }
  
  fetchVehicleType() {
    this.dataService.getVehicles().subscribe((data) => {
      this.vehicle = data;
    });
  }

  createVehicleType(){
    this.dataService.addVehicle(this.newVehicle).subscribe(response => {
      console.log(response);
      this.addVehicleType
      this.clearForm();
    }
    );
    this.fetchVehicleType()
  }

  addVehicleType() {
    this.newVehicleType.vehicleDescription ="truck";
    console.log("We are here");
    console.log("response:method");
    this.dataService.addVehicle(this.newVehicle).subscribe(response => {
      console.log(response)
    });
      }

      clearForm(){
        this.vehicleMake = '';
        this.vehicleColor = '';
        this.numberPlate = '';
        this.vehicleName= '';
        this.year = '';
        this.capacity= '';
        this.vehiclePrice = '';
      }


}