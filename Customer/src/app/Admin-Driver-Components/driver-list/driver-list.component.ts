import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services-ad-dri/data.service';
import { Driver } from 'src/app/models-ad-dri/driver';
import { Employee } from 'src/app/models-ad-dri/employee';


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
  //  deleteDriver = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchDrivers();
    
  }

  fetchDrivers() {
    this.dataService.getDrivers().subscribe((data) => {
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
  }

    deleteDriver(licenceNumber: string) {
     this.dataService.deleteDriver(licenceNumber).subscribe(response => {
      this.fetchDrivers()
     });
 
}
}
