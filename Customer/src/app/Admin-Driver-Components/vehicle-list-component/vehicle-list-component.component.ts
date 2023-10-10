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
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getVehicles().subscribe(vehicle => {
      this.vehicle = vehicle
      console.log(this.vehicle);
    });
  }
  fetchVehicles() {
    this.dataService.getVehicles().subscribe((data) => {
      this.vehicle = data;
    });
  }

  createVehicle(){
    this.dataService.addVehicle(this.newVehicle).subscribe(response => {
      console.log(response);
      this.addVehicleType
      this.fetchVehicles()
    });
  }
  addVehicleType() {
    this.newVehicleType.vehicleDescription ="truck";
    console.log("response:method");
    this.dataService.addVehicle(this.newVehicle).subscribe(response => {
      console.log(response)
    });
      }

//  deleteVehicle(vehicle: string) {
//   const index = this.vehicles.indexOf(vehicle);
//   if (index !== -1) {
//     this.vehicles.splice(index, 1);
//   }
// }
 
}