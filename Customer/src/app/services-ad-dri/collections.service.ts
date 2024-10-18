import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models-ad-dri/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private baseUrl = 'https://storage-rental-system-2-0.onrender.com';
  booking?:Booking;

  constructor(private http: HttpClient) {}

  fetchCollections(): Observable<Booking[]> {
    const url = `${this.baseUrl}/booking/collections`;
    return this.http.get<Booking[]>(url);
  }

  getBooking(bookingNuber: number): Observable<Booking> {
    const url = `${this.baseUrl}/booking/readBooking/${bookingNuber}`;
    return this.http.get<Booking>(url);
  }

  updateBookingCollection(bookingNuber: any): Observable<Booking> {
    const url = `${this.baseUrl}/booking/update`;
    return this.http.post<Booking>(url, bookingNuber);
  }
}