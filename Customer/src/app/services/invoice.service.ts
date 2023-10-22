import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../Models/invoice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public createInvoice(invoice: Invoice): Observable<Invoice> {
    const url = `${this.baseUrl}/invoice/create`;
    return this.http.post<Invoice>(url, invoice);
}

generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
