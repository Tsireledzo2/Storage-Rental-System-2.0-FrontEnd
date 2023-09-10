import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})

export class CustomerDetailsComponent {
data = {
  firstName:'',
  surname:'',
  cellphone:'',
  email: ''
};

constructor (private http: HttpClient){}

  onSubmit() {

    this.http.post('http://localhost:8080/customer/saveCustomer', this.data)
    .subscribe(response=>{
      console.log('Data saved successfully:', response);
      alert('Data saved successfully');
      this.resetForm();

    },
    error=>{
      console.log('Error while saving the data:', error);
      alert('Error while saving the data');
    }
    );
   
  
}
resetForm(){
  this.data = {
    firstName:'',
    surname:'',
    cellphone:'',
    email:''
  };
}
}
