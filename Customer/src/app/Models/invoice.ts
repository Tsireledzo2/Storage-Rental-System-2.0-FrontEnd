export class Invoice {
    invoiceNumber: string;
    customerName: string;
    formattedInvoiceDate: Date;
    totalAmount: string;
    
    constructor() {
        this.invoiceNumber = "";
        this.customerName = "";
        this.formattedInvoiceDate = new Date;
        this.totalAmount = "";
    }
}
