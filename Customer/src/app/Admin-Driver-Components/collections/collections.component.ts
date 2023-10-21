import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AddressServiceService } from 'src/app/services-ad-dri/address-service.service';
import { Address } from 'src/app/models-ad-dri/address';
import { Router } from '@angular/router';
import { CollectionsService } from 'src/app/services-ad-dri/collections.service';
import { Booking } from 'src/app/models-ad-dri/booking';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  public location: string = '143 Sir Lowry ForeShore Cape Town';
  bookingNumber: string = '';
  bookingNum: number = 0;
  public address?: Address;
  booking?: Booking;

  constructor(
    private pageLocation: Location,
    private addressService: AddressServiceService,
    private route: Router,
    private collectionService: CollectionsService
  ) {}

  ngOnInit(): void {
    this.getSelectedAddress();
    console.log(this.getSelectedAddress());
  }

  getSelectedAddress(): void {
    this.addressService.data$.subscribe((data) => {
      data;
      console.log('Received', data);
      this.bookingNumber = data;
      this.bookingNum = parseInt(this.bookingNumber);
      this.getAddressByBookingNumber(data);
    });
  }

  getAddressByBookingNumber(bookingNumber: string) {
    this.addressService
      .getAddressByBokingNumber(bookingNumber)
      .subscribe((address) => {
        this.address = address;
        console.log(this.address);
      });
  }

  goBack(): void {
    this.pageLocation.back();
  }

  takeCollections(): void {
    console.log(this.bookingNum);
    this.collectionService.getBooking(this.bookingNum).subscribe((booking) => {
      this.booking = booking;
      this.booking.collection = false;
      console.log('fdsfsdfsdfsdfsdfdsfdsdsf', this.booking);
      console.log('Booking', this.booking);
      this.collectionService
        .updateBookingCollection(this.booking)
        .subscribe((booking) => {
          console.log('Updated', this.booking);
        });
    });
    alert('Collection taken');
    this.route.navigateByUrl('/driverHome').then(() => {
      window.location.reload();
    });
  }
}
