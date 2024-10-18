import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrl = 'https://storage-rental-system-2-0.onrender.com';

  constructor(private http: HttpClient) { }

  public createInvoice(invoice: Invoice): Observable<Invoice> {
    const url = `${this.baseUrl}/invoice/create`;
    return this.http.post<Invoice>(url, invoice);
}

generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
