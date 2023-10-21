import { Component, Input, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services-ad-dri/collections.service';
import { Booking } from 'src/app/models-ad-dri/booking';
import { AddressServiceService } from 'src/app/services-ad-dri/address-service.service';

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.css'],
})
export class DriverHomeComponent implements OnInit {
  public Drivertitle: string = 'Drivers';
  public booking: Booking[] = [];
  @Input()
  bookingNumber?: Booking;

  constructor(
    private collection: CollectionsService,
    private addressService: AddressServiceService
  ) {}

  ngOnInit(): void {
    
    this.getCollections();
  }

  getCollections(): void {
    this.collection.fetchCollections().subscribe((booking) => {
      this.booking = booking;
      console.log(this.booking);
    });
  }

  sendDataToAddress(): void {
    var bookingNumber = this.bookingNumber?.bookingNumber;
    console.log(bookingNumber);
    this.addressService.sendBookingNumber(bookingNumber);
  }
}
