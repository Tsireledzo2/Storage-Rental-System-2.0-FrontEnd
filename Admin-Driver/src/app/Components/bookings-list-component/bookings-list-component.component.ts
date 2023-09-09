import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-bookings-list-component',
  templateUrl: './bookings-list-component.component.html',
  styleUrls: ['./bookings-list-component.component.css']
})
export class BookingsListComponentComponent {
  // bookings: string[] = ['Lilz','Lilz ','Lilz Lilz','Lilz ' ];

  booking: Booking[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBookings().subscribe(booking => {
      this.booking = booking
      console.log(this.booking);
    });
}

fetchBookings() {
  this.dataService.getBookings().subscribe(data => {
    this.booking = data;
  });
}
}