import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/Models/invoice';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})

export class BookingComponent implements OnInit {
  quantity: number = 1;
  showExtraFields: boolean = false;
  invoices: any[] = [];
  recipientEmail: string = '';

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

  //invoice
  public invoice?:Invoice;
  public invoiceNumber: string = "";
  public  customerName: string= "";
  public  formattedInvoiceDate: string = "";
  public  storageUnitInvoice: string = "";
  //
 

  constructor(
    private bookingService: BookServiceService,
    private storageService: StorageUnitService,
    private addressService: AddressServiceService,
    private route: Router,
    private httpClient: HttpClient,
    private invoiceService: InvoiceService,
  ) {}

  ngOnInit() {
    this.getBooking();
    this.getSelectedStorageUnit();
    console.log("customer login email",this.storedData);
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
        this.invoice = new Invoice();
        this.customerName = String(this.storedData);
        this.invoiceNumber = String(storageUnit.storageUnitType.height);
        this.storageUnitInvoice = storageUnit.unitSizeDescription;
        //save
        this.invoice.invoiceNumber ="1";
        this.invoice.customerName= String(this.storedData);
        this.invoice.formattedInvoiceDate = this.currentDate;
        this.invoice.totalAmount = String(this.totalPrice);
        this.invoiceService.createInvoice(this.invoice).subscribe(response =>{
          this.invoice = response;
          console.log("saved invoice",response);
        });
      });
  }

  addAddress(address: Address): void {
    this.addressService.addAddress(address).subscribe(address => {
      address = address
      console.log(address)
    });
  }


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
        this.sendInvoiceByEmail();
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

   sendInvoiceByEmail() {
    this.recipientEmail = String(this.storedData);
    const recipientEmail = this.recipientEmail;

    const emailBody = this.generateEmailBody();

    this.httpClient.post('http://localhost:8080/api/invoices/sendEmail', null, {
      params: {
        recipientEmail: recipientEmail,
        emailBody: emailBody
      }
    }).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
      },
      (error) => {
        console.error('Email sending failed', error);
        console.error('Error message:', error.message);
        console.error('Status code:', error.status);
      }
    );
  }

  generateEmailBody(): string {
    let emailContent = '<html><body>';
    emailContent += '<h1>Storage Unit Booking Invoice</h1>';
    emailContent += '<table>';

    const min = 100;
    const max = 9000;
    const randomNumber = this.invoiceService.generateRandomNumber(min, max);

    emailContent += '<tr><td>Thank you for trusting us with your belongings here is your invoice :)</td></tr>';
      emailContent += '<tr><td>Invoice ID: ' +randomNumber + '</td></tr>';
      emailContent += '<tr><td>Customer: ' + this.customerName + '</td></tr>';
      emailContent += '<tr><td>Storage Unit:' + this.storageUnitInvoice + '</td></tr>';
      emailContent += '<tr><td>Storage Size:' + this.unitSize + 'm<sup>2</sup>'+'</td></tr>';
      emailContent += '<tr><td>Collection:' + this.collection + '</td></tr>';
      emailContent += '<tr><td>Invoice Date: ' + this.currentDate + '</td></tr>';
      emailContent += '<tr><td>Invoice Amount: R' + this.totalPrice + '</td></tr>';
    
    emailContent += '</table></body></html>';
    console.log("email",emailContent)
    return emailContent;
  }
}
