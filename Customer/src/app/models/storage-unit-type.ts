export class StorageUnitType {
    length: Number;
    width: Number;
    height: Number;
    unitSize: Number;
    price: Number;

    constructor
    (
        length: Number,
        width: Number,
        height: Number,
        unitSize: Number,
        price: Number
        )
        {
            this.length = length;
            this.width = width;
            this.height = height;
            this.unitSize = unitSize;
            this.price = price;


    }
}