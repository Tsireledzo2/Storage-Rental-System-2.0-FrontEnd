import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AddressServiceService } from 'src/app/services-ad-dri/address-service.service';
import { Address } from 'src/app/models-ad-dri/address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit{
  public location: string = '143 Sir Lowry ForeShore Cape Town';
  bookingNumber: string = "";
  public address?: Address;

  constructor(
    private pageLocation: Location, 
    private addressService: AddressServiceService, 
    private route: Router
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
      this.getAddressByBookingNumber(data);
    });
  }

  getAddressByBookingNumber(bookingNumber: string) {
    this.addressService.getAddressByBokingNumber(bookingNumber).subscribe(
      address => {
        this.address = address
        console.log(this.address);
        }
      );
  }

  goBack(): void {
    this.pageLocation.back();
  }

  takeCollections(): void {
    alert("Collection taken");
    this.route.navigateByUrl("/driverHome");
  }
}