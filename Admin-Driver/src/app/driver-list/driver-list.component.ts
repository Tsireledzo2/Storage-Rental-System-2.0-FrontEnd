import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Driver } from '../models/driver';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {
   driver: Driver[] = [];
   
   showAddEmployeeForm = false;
   newEmployee: Employee = new Employee();
   newDriver : Driver = new Driver(this.newEmployee);
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log("running");
    this.fetchDrivers();
    // this.dataService.getDrivers().subscribe(driver => {
    //   this.driver = driver
    //   console.log(this.driver);
    // });
  }

  fetchDrivers() {
    this.dataService.getDrivers().subscribe((data) => {
      console.log("driver fetched")
      this.driver = data;
    });
  }
  createDriver(){
    this.dataService.addEmployee(this.newEmployee).subscribe(response => {
      console.log(response)
      this.addDriver()
      this.fetchDrivers()
    }
      );
  }

  addDriver() {
    this.newDriver.job_description = "Driver";
    this.dataService.addDriver(this.newDriver).subscribe(response => {
      console.log(response)
      
    });

//  deleteDriver(driver: string) {
//   const index = this.drivers.indexOf(driver);
//   if (index !== -1) {
//     this.drivers.splice(index, 1);
//   }
// }
}
}
