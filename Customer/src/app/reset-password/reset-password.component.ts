import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  password: string = '';
  confirmNewPassword: string = '';
  
  constructor(private httpClient: HttpClient,private route: Router) {}

  onSubmit() {
    if (this.email && this.password && this.confirmNewPassword) {
      if (this.password !== this.confirmNewPassword) {
       alert ("Passwords don't match.");
      } else {
        const resetData = {
          email: this.email,
          password: this.password
        };
  
        this.httpClient.post('https://storage-rental-system-2-0.onrender.com/customer/update', resetData)
          .subscribe(
            (response) => {
              alert('Password reset successfully');
              
              this.route.navigateByUrl("/customerLogin");
            },
            (error) => {
              alert('Password reset failed');
            }
          );
      }
    } else {
     alert("All fields are required.");
    }
  }
}