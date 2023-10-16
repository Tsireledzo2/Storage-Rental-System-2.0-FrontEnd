import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  fullName: string = '';
  email: string = '';
  username: string = '';
  cellphone: string = '';
  password: string = '';
  repeatPassword: string = '';
  agreeToTerms: boolean = false;

  constructor(private http: HttpClient, private route: Router) { }

  onSubmit() {
   
    if (
      !this.fullName ||
      !this.email ||
      !this.cellphone ||
      !this.password ||
      !this.repeatPassword ||
      !this.agreeToTerms
    ) {
      alert('Please fill in all required fields');
      return;
    }

    if (this.password !== this.repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    const formData = {
      fullName: this.fullName,
      email: this.email,
      cellphone: this.cellphone,
      password: this.password,
      repeatPassword: this.repeatPassword,
      agreeToTerms: this.agreeToTerms
    };

    this.http.post('http://localhost:8080/customer/saveCustomer', formData).subscribe(
      (response) => {
        console.log('Registration successful');
        alert('Data saved');
        this.clearForm();
        this.route.navigateByUrl('/customerLogin');
      },
      (error) => {
        console.error('Registration error');
        alert('Error while saving data');
      }
    );
  }

  clearForm() {
    this.fullName = '';
    this.email = '';
    this.cellphone = '';
    this.password = '';
    this.repeatPassword = '';
    this.agreeToTerms = false;
  }
}
