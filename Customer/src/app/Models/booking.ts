import { Customer } from "./customer";

export class Booking {
    bookingNumber: string;
    bookingDate: Date;
    startDate: Date;
    endDate: Date;
    collection: Boolean;
    totalAmount: Number;
    // customer: Customer;

    constructor
    (
    bookingNumber: string,
    bookingDate: Date,
    startDate: Date,
    endDate: Date,
    collection: Boolean,
    totalAmount: Number,
    // customer:Customer
    )
    {
        this.bookingNumber =bookingNumber;
        this.bookingDate = bookingDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.collection = collection;
        this.totalAmount = totalAmount;
        // this.customer = customer;
    }

}