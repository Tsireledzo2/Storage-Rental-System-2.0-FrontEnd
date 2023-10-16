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
  errorMessage: string = '';
  constructor(private httpClient: HttpClient,private route: Router) {}

  onSubmit() {
    if (this.password !== this.confirmNewPassword) {
      this.errorMessage = "Passwords don't match.";
      return;
    }
    const resetData = {
      email: this.email,
      password: this.password,
      
    };
  
    this.httpClient.post('http://localhost:8080/customer/update', resetData)
      .subscribe(
        (response) => {
          alert('Password reset successful');
          this.clearForm();
          this.route.navigateByUrl("/customerLogin");
          
        },
        (error) => {
          alert('Password reset failed');
          
        }
      );
      
      

      }

      clearForm() {
        this.email = '';
        this.password = '';
        this.confirmNewPassword = '';
        
    }


}
