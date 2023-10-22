export class Invoice {
    invoiceNumber: string;
    customerName: string;
    formattedInvoiceDate: string;
    totalAmount: string;
    
    constructor() {
        this.invoiceNumber = "";
        this.customerName = "";
        this.formattedInvoiceDate = "";
        this.totalAmount = "";
    }
}
