import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContactService } from './ContactService';




@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  
  constructor(private contactUS: ContactService) {}
  

  onSubmit() {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.contactUS.sendContactFormData(formData)
      .subscribe(
        (response) => {
          alert('Email sent successfully');
          // Optionally, display a success message to the user
        },
        (response) => {
          alert('Email sent successfully');
          
          // Optionally, display an error message to the user
        }
      );

    // Optionally, you can reset the form fields after submission
    this.name = '';
    this.email = '';
    this.message = '';


  }
}
