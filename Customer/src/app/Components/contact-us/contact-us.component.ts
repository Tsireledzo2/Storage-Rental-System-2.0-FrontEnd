import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContactService } from './ContactService';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})

export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  errorMessage: string = '';

  constructor(private contactUS: ContactService) {}

  onSubmit() {

   

   
    if (!this.name || !this.email || !this.message) {
      alert('All fields are required.');
      return;
    }

  
    if (!this.isValidEmail(this.email)) {
      alert('Invalid email format.');
      return;
    }

    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    this.contactUS.sendContactFormData(formData).subscribe(
      (response) => {
        alert('Email sent successfully');
    
      },
      (error) => {
        alert('Email sent successfully');

      }
    );


    this.name = '';
    this.email = '';
    this.message = '';
  }

  isValidEmail(email: string): boolean {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

