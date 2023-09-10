import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleType } from 'src/app/models/vehicle-type';

@Component({
  selector: 'app-vehicle-list-component',
  templateUrl: './vehicle-list-component.component.html',
  styleUrls: ['./vehicle-list-component.component.css']
})
export class VehicleListComponentComponent {
  // vehicles: string[] = ['mini truck','Big truck','XXL Truck','normal truck' ];

  vehicle: Vehicle[] = [];
  
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getVehicles().subscribe(vehicle => {
      this.vehicle = vehicle
      console.log(this.vehicle);
    });
  }
  fetchDrivers() {
    this.dataService.getVehicles().subscribe((data) => {
      this.vehicle = data;
    });
  }
  addVehicle() {
    const newVehicleType: VehicleType = {
      vehicleDescription: 'truck',
      capacity: '1587',
      vehiclePrice: '7000.00',
    };

    const newVehicle: Vehicle = new Vehicle('CA1230', 'Toyota','Black','2022','Camry', newVehicleType);
    this.dataService.addVehicle(newVehicle).subscribe(() => {
      //this.fetchVehicles();
    });

//  deleteVehicle(vehicle: string) {
//   const index = this.vehicles.indexOf(vehicle);
//   if (index !== -1) {
//     this.vehicles.splice(index, 1);
//   }
// }
  }
}