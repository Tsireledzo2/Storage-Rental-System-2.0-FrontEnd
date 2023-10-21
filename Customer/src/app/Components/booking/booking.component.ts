import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from 'src/app/models-ad-dri/address';
import { Booking } from 'src/app/models/booking';
import { Customer } from 'src/app/models/customer';
import { StorageUnit } from 'src/app/models/storage-unit';
import { BookServiceService } from 'src/app/services/book-service.service';
import { StorageUnitService } from 'src/app/services/storage-unit.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Router } from '@angular/router';
import { AddressServiceService } from 'src/app/services/address-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})

export class BookingComponent implements OnInit {
  quantity: number = 1;
  showExtraFields: boolean = false;

  storedData = localStorage.getItem('email');
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
    this.totalPrice = value ? this.totalPrice + this.collectionPrice : this.totalPrice - this.collectionPrice;
  }

  booking: Booking[] = [];
  book?: Booking;
  storageUnit?: StorageUnit;
  unitSizeDescription: string = "";
  unitSize: Number = 0;
  width: Number = 0;
  length: Number = 0;
  height: Number = 0;
  price: Number = 0;
  email: string = '';
  storageid: string = '';
  collectionPrice: number = 120;
  totalPrice: number = 0;
  currentDate: string = new Date().toISOString().split('T')[0];;
  //
  bookingNumber: string ="";
    bookingDate: Date = new Date();
    startDate: Date = new Date();
    endDate: Date= new Date();
    collection: boolean=true;
    totalAmount: number=0;
  //
  public address?: Address;

  public streetNumber: string = "";
  public streetName: string = "";
  public state: string = "";
  public zipCode: string = "";
  // bookings: Booking = new Booking(this.bookingNumber,this.bookingDate,this.startDate,this.endDate,this.collection,this.totalAmount);
  // address: Address = new Address(this.bookings);

  constructor(
    private bookingService: BookServiceService,
    private storageService: StorageUnitService,
    private addressService: AddressServiceService,
    private route: Router
  ) {}

  ngOnInit() {
    this.getBooking();
    this.getSelectedStorageUnit();
    console.log("customer login email",this.storedData);
   
    // this.getCustomerEmail();
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

  getSelectedStorageUnit(): void {
    this.storageService.data$.subscribe((data) => {
      data;
      console.log('Received', data);
      this.storageid = data;
      this.getStorageUnitById(data);
    });
  }

  getStorageUnitById(storageUnitId: any): void {
    this.bookingService
      .getStorageUnitDetails(storageUnitId)
      .subscribe((storageUnit) => {
        this.storageUnit = storageUnit;
        console.log(storageUnit);
        this.unitSizeDescription = storageUnit.unitSizeDescription;
        this.unitSize = storageUnit.storageUnitType.unitSize;
        this.width = storageUnit.storageUnitType.width;
        this.length = storageUnit.storageUnitType.length;
        this.height = storageUnit.storageUnitType.height;
        this.price = storageUnit.storageUnitType.price;
        this.totalPrice = storageUnit.storageUnitType.price.valueOf();
      });
  }

  addAddress(address: Address): void {
    this.addressService.addAddress(address).subscribe(address => {
      address = address
      console.log(address)
    });
  }
  // address: Address = new Address();
  //  public customer : Customer = new Customer(this.address);

  //  public createBooking(): void {
  //   this.bookingService.createBooking(this.book).subscribe(book => {
  //      this.book = book
  //      console.log(this.book)
  //   })
  //  }

  //  getCustomerEmail(): void {
  //   this.storageService.email$.subscribe(data => {
  //      data
  //      console.log('Received',data)
  //      this.email = data;
  //      //this.getStorageUnitById(data)
  //     });
  //  }

  public onAddBooking(addForm: NgForm): void {
    var bookings: Booking = new Booking(this.bookingNumber,this.bookingDate,this.startDate,this.endDate,this.collection,this.totalAmount);
   
    document.getElementById('submit-button')?.click();
    this.bookingService.createBooking(addForm.value).subscribe(
      (response: Booking) => {
        console.log(this.streetName);
        
        bookings = response;
        this.address = new Address(bookings)

        this.address.streetNumber = this.streetNumber;
        this.address.streetName =  this.streetName;
        this.address.state = this.state;
        this.address.zipCode = this.zipCode;
        
        this.addAddress(this.address)
        console.log(response);
        alert('Booking was successful');
        this.route.navigateByUrl('/');
        // this.getBooking();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModel(booking: Booking, mode: string): void {
    const container = document.getElementById('BookingForm');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'model');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addBookingModal');
    }

    container?.appendChild(button);
    button.click();
  }
}
