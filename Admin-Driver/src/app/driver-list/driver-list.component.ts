import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Driver } from '../models/driver';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {
  //drivers: string[] = ['Wisdom','Ndumiso','Christian','Argus' ];

  driver: Driver[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDrivers().subscribe(driver => {
      this.driver = driver
      console.log(this.driver);
    });
  }

  fetchDrivers() {
    this.dataService.getDrivers().subscribe((data) => {
      this.driver = data;
    });
  }

  addDriver() {
    const newEmployee: Employee = {
      employeeNumber: '123',
      first_name: 'New Employee First Name',
      last_name: 'New Employee Last Name',
      email: 'newemployee@example.com',
      password: 'password123'
    };

    const newDriver: Driver = new Driver('ABC123', 'Driver Job', newEmployee);

    this.dataService.addDriver(newDriver).subscribe(() => {
      this.fetchDrivers();
    });

//  deleteDriver(driver: string) {
//   const index = this.drivers.indexOf(driver);
//   if (index !== -1) {
//     this.drivers.splice(index, 1);
//   }
// }
}
}
