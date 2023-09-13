import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { Booking } from 'src/app/models/booking';
import { Customer } from 'src/app/models/customer';
import { StorageUnit } from 'src/app/models/storage-unit';
import { BookServiceService } from 'src/app/services/book-service.service';
import { StorageUnitService } from 'src/app/services/storage-unit.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
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

  booking: Booking[] = [];
  book?: Booking;
  storageUnit?: StorageUnit;
  unitSize: Number = 0;
  width: Number = 0;
  lenth: Number = 0;
  price: Number = 0;
  email: string = '';
  storageid: string = '';

  constructor(
    private bookingService: BookServiceService,
    private storageService: StorageUnitService,
    private route: Router
  ) {}

  ngOnInit() {
    this.getBooking();
    this.getSelectedStorageUnit();
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
        this.unitSize = storageUnit.storageUnitType.unitSize;
        this.width = storageUnit.storageUnitType.width;
        this.lenth = storageUnit.storageUnitType.length;
        this.price = storageUnit.storageUnitType.price;
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
    document.getElementById('submit-button')?.click();
    this.bookingService.createBooking(addForm.value).subscribe(
      (response: Booking) => {
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
