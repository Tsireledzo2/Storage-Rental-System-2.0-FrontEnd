import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-invoice-email',
  templateUrl: './invoice-email.component.html',
  styleUrls: ['./invoice-email.component.css']
})
export class InvoiceEmailComponent {
  invoices!: any[];

  constructor(private https: HttpClient) { }

  ngOnInit(){
    this.https.get<any[]>('/api/invoices').subscribe((data: any[]) => {
      this.invoices = data;
    });
    
  }

}
