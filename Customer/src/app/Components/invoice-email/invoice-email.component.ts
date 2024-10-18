import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoice-email',
  templateUrl: './invoice-email.component.html',
  styleUrls: ['./invoice-email.component.css']
})
export class InvoiceEmailComponent implements OnInit {
  invoices: any[] = [];
  recipientEmail: string = ''; 

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadInvoices();
  }

  loadInvoices() {
    this.httpClient.get<any[]>('https://storage-rental-system-2-0.onrender.com/invoice/getAll').subscribe(
      (data: any[]) => {
        this.invoices = data;
      },
      (error) => {
        console.error('Error fetching invoices:', error);
      }
    );
  }

  sendInvoiceByEmail() {
    // Ensure that you are using a valid recipient email
    const recipientEmail = this.recipientEmail;

    // Generate the email body based on the invoices data
    const emailBody = this.generateEmailBody(this.invoices);

    // Make an HTTP request to send the email
    this.httpClient.post('https://storage-rental-system-2-0.onrender.com/api/invoices/sendEmail', null, {
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

  generateEmailBody(invoices: any[]): string {
    let emailContent = '<html><body>';
    emailContent += '<h1>Your Invoices</h1>';
    emailContent += '<table>';

    for (const invoice of invoices) {
      emailContent += '<tr><td>Invoice ID: ' + invoice.invoiceNumber + '</td></tr>';
      emailContent += '<tr><td>Customer: ' + invoice.customerName + '</td></tr>';
      emailContent += '<tr><td>Invoice Date: ' + invoice.formattedInvoiceDate + '</td></tr>';
      emailContent += '<tr><td>Invoice Amount: $' + invoice.totalAmount + '</td></tr>';
    }
    emailContent += '</table></body></html>';
    return emailContent;
  }
}
