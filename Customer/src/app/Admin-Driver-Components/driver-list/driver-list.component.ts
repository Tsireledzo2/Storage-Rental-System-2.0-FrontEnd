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
  first_name : string = '';
  last_name: string = '';
  employee_number: string= '';
  email: string= '';
  password: string= '';
  licence_number: string= '';

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
    console.log("create ");
    this.dataService.addEmployee(this.newEmployee).subscribe(response => {
      console.log(response)
      console.log("About to clean")
      this.addDriver()
      this.clearForm()
    }
      );
      this.fetchDrivers();
  }

  addDriver() {
    this.newDriver.job_description = "Driver";
    console.log("about to add driver");
    this.dataService.addDriver(this.newDriver).subscribe(response => {
      console.log(response)
      
    });
    console.log("driver added");
  }

  clearForm(){
    this.first_name = '';
    this. last_name = '';
    this.employee_number= '';
    this.email = '';
    this.password = '';
    this.licence_number ='';

  }

    deleteDriver(licenceNumber: string) {
     this.dataService.deleteDriver(licenceNumber).subscribe(response => {
      this.fetchDrivers()
     });
 
}
}
