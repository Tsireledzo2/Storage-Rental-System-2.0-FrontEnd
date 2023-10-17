import { Component, Input } from '@angular/core';
import { Booking } from 'src/app/models-ad-dri/booking';
import { AddressServiceService } from 'src/app/services-ad-dri/address-service.service';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent {

  @Input()
  booking?: Booking;

  constructor(
    private addressService: AddressServiceService
  ) {}

  sendDataToAddress(): void {
    var bookingNumber = this.booking?.bookingNumber;
    console.log(bookingNumber);
    this.addressService.sendBookingNumber(bookingNumber);
  }
  
}
