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
    this.httpClient.get<any[]>('http://localhost:8080/invoice/getAll').subscribe(
      (data: any[]) => {
        this.invoices = data;
      },
      (error) => {
        console.error('Error fetching invoices:', error);
      }
    );
  }

  sendInvoiceByEmail() {
    // Assuming you want to send the email when a button is clicked
    // You can use this.recipientEmail as the recipient's email address
    const recipientEmail = this.recipientEmail;

    // Make an HTTP request to send the email
    this.httpClient.post('http://localhost:8080/api/invoices/sendEmail', { recipientEmail })
      .subscribe(
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
}
