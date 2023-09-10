export class Booking {
    bookingNumber: string;

    bookingDate: Date;
    startDate: Date;
    endDate: Date;
    collection: boolean;
    totalAmount: Number;

    constructor(
        bookingNumber: string,
        bookingDate: Date,
        startDate: Date,
        endDate: Date,
        collection: boolean,
        totalAmount: number
      ) {
        this.bookingNumber = bookingNumber;
        this.bookingDate = bookingDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.collection = collection;
        this.totalAmount = totalAmount;
      }

}