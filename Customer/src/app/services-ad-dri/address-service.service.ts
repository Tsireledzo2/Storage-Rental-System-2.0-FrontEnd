import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models-ad-dri/address';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressServiceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAddressByBokingNumber(bookingNuber: string): Observable<Address> {
    const url = `${this.baseUrl}/address/getAddressByBookingNumber/${bookingNuber}`;
    return this.http.get<Address>(url);
  }

  private dataSubject = new BehaviorSubject<any>('');
  data$ = this.dataSubject.asObservable();

  sendBookingNumber(data: any) {
    this.dataSubject.next(data);
  }
}