import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Booking } from 'src/app/models/booking';
import { BookServiceService } from 'src/app/services/book-service.service';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  quantity: number = 1;
  showExtraFields: boolean = false;

  incrementQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  toggleExtraFields(value: boolean) {
    this.showExtraFields = value;
  }

  // constructor(private http: HttpClient) {}

  // onSubmit(formData: any): void {
  //   const booking: Booking = {
  //     bookingNumber: formData.bookingNumber,
  //     bookingDate: formData.bookingDate,
  //     startDate: formData.startDate,
  //     endDate: formData.endDate,
  //     // add any other properties from the form data
  //   };

  //   const url = 'http://your-api-endpoint.com/bookings';
  //   this.http.post(url, booking).subscribe(
  //     (response) => {
  //       console.log('Booking created successfully:', response);
  //     },
  //     (error) => {
  //       console.error('Error creating booking:', error);
  //     }
  //   );
  // }

booking: Booking[] = [];


 constructor(private bookingService: BookServiceService) {}

 ngOnInit() {
   this.getBooking();
 }

 getBooking(): void {
  this.bookingService.getBooking().subscribe(
    (response: Booking[]) => {
      this.booking = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );  
 }

 public onAddBooking(addForm: NgForm): void {
  document.getElementById('submit-button')?.click();
  this.bookingService.createBooking(addForm.value).subscribe(
    (response: Booking) => {
      console.log(response);
      // this.getBooking();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
  
 }

 public onOpenModel(booking: Booking, mode: string): void {
  const container = document.getElementById('BookingForm');
  const button = document.createElement('button');
  button.type = "button";
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'model');
  if (mode === 'add'){
    button.setAttribute('data-target', '#addBookingModal');
  }

  container?.appendChild(button);
  button.click();

 
 }


  


}
