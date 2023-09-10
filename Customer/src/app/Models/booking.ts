export interface Booking {
    bookingNumber: number;
    bookingDate: Date;
    startDate: Date;
    endDate: Date;
    collection: boolean;
    totalAmount: Number;

    // constructor
    // (
    // bookingNumber: number,
    // bookingDate: Date,
    // startDate: Date,
    // endDate: Date,
    // collection: boolean,
    // totalAmount: Number
    // )
    // {
    //     this.bookingNumber =bookingNumber;
    //     this.bookingDate = bookingDate;
    //     this.startDate = startDate;
    //     this.endDate = endDate;
    //     this.collection = collection;
    //     this.totalAmount = totalAmount;

    // }

}