import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { StorageUnitService } from 'src/app/services/storage-unit.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})

export class CustomerDetailsComponent implements OnInit{
  customer?: Customer;
data = {
  firstName:'',
  surname:'',
  cellphone:'',
  email: ''
};

constructor (private http: HttpClient, private route:Router, private service : StorageUnitService){}
  ngOnInit(): void {
 //   this.sendDataToBooking();
  }

  onSubmit() {

    this.http.post('http://localhost:8080/customer/saveCustomer', this.data)
    .subscribe((response: any) =>{
      this.customer = response
      console.log(this.customer?.email)
      console.log('Data saved successfully:', response);
      alert('Data saved successfully');
      this.resetForm();
     // this.sendDataToBooking();
    // console.log(this.customer.email)
     // this.service.setEmail(this.customer?.email);
      this.route.navigateByUrl("/Booking");

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

sendDataToBooking(): void {
  var StorageUnitId = this.data.email;
  console.log(StorageUnitId);
  this.service.setEmail(StorageUnitId);
}
}
