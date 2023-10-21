import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/services-ad-dri/authentication-service.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models-ad-dri/employee';
import { Driver } from 'src/app/models-ad-dri/driver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  employeeNumber: string = "";
  public loginTitle: string = "Login";
  public employee? : Employee;
  public driver? : Driver;


  constructor(private authentication : AuthenticationServiceService,private router: Router){}
  
  getEmployeeByEmail():void {

    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Email and password cannot be empty!');
      return;
    }
    
   this.authentication.fetchUserByEmail(this.email, this.password).subscribe(employee => {
    this.employee = employee;
    if (this.employee == null) { 
      alert("Email/password is incorrect!")
    } else {
      this.employeeNumber = this.employee.employeeNumber;
      console.log(this.employee?.employeeNumber)
      this.getAdminOrDriver(this.employeeNumber)
    }
   
  });
    }

    getAdminOrDriver(employeeNumber: string): void {
      this.authentication.fetchAdminDriver(employeeNumber).subscribe(driver => { this.driver = driver
      console.log(driver)
      if (driver.job_description === "Driver") {
        this.router.navigateByUrl("/driverHome");
      } else if (driver.job_description === "admin") {
        this.router.navigateByUrl("/adminHome");
      }
    });
    }

    ngOnInit():void {
//this.getEmployeeByEmail();
    }
  }