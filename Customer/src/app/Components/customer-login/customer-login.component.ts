import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private loginUrl = 'https://storage-rental-system-2-0.onrender.com';

  private isValidInput(email: string, password: string): boolean {
    return email.trim() !== '' && password.trim() !== '';
  }

  login(email: string, password: string): Observable<any> {
    if (!this.isValidInput(email, password)) {
      alert('Please fill in both email and password');
    }

    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.loginUrl, body, { headers });
  }

  fetchUserByEmail(employeeEmail: string, password: string): Observable<Customer> {
    if (!this.isValidInput(employeeEmail, password)) {
      alert('Please fill in both email and password');
    }

    const url = `${this.loginUrl}/customer/login/${employeeEmail}/${password}`;
    return this.http.get<Customer>(url);
  }
}

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  customer?: Customer;

  constructor(private loginService: LoginService, private route: Router) {}

  onSubmit(): void {
    const isAuthenticated = this.loginService.login(this.email, this.password);
    if (isAuthenticated) {
      console.log('Login successful');
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }

  login(): void {
    this.loginService.fetchUserByEmail(this.email, this.password).subscribe((response) => {
      this.customer = response;

      if (this.customer == null) {
        alert('Incorrect credentials');
        this.clearForm();
      } else {
       // console.log(this.customer.email);
        alert('Login successful');
        
      }
    });
  }

  clearForm() {
    this.email = '';
    this.password = '';
  }
}
