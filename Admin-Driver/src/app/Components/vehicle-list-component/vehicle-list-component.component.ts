import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-list-component',
  templateUrl: './vehicle-list-component.component.html',
  styleUrls: ['./vehicle-list-component.component.css']
})
export class VehicleListComponentComponent {
  vehicles: string[] = ['mini truck','Big truck','XXL Truck','normal truck' ];

  addVehicles(){
    const newVehicleName = 'New Vehicle';
    this.vehicles.push(newVehicleName);
 }

 deleteVehicle(vehicle: string) {
  const index = this.vehicles.indexOf(vehicle);
  if (index !== -1) {
    this.vehicles.splice(index, 1);
  }
}
}