import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings-list-component',
  templateUrl: './bookings-list-component.component.html',
  styleUrls: ['./bookings-list-component.component.css']
})
export class BookingsListComponentComponent {
  bookings: string[] = ['Lilz','Lilz ','Lilz Lilz','Lilz ' ];
}
