import { Booking } from "../models/booking";

export class Address {
  addressID: string;
  streetNumber: string;
  streetName: string;
  state: string;
  zipCode: string;
  booking: Booking

  constructor(booking: Booking) {
    this.addressID = '';
    this.streetNumber = '';
    this.streetName = '';
    this.state = '';
    this.zipCode = '';
    this.booking = booking;
  }
}