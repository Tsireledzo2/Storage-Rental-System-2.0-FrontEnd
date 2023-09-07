import { Component } from '@angular/core';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {
  drivers: string[] = ['Wisdom','Ndumiso','Christian','Argus' ];

  addDriver(){
    const newDriverName = 'New Driver';
    this.drivers.push(newDriverName);
 }

 deleteDriver(driver: string) {
  const index = this.drivers.indexOf(driver);
  if (index !== -1) {
    this.drivers.splice(index, 1);
  }
}
}