import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { StorageUnit } from '../Models/storage-unit';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private baseUrl = 'https://storage-rental-system-2-0.onrender.com';


  constructor(private http: HttpClient) {}

  public getBooking(): Observable<Booking[]> {
    const url = `${this.baseUrl}/booking/getAll`;
    return this.http.get<Booking[]>(url);
  }

public createBooking(booking: Booking): Observable<Booking> {
    const url = `${this.baseUrl}/booking/create`;
    return this.http.post<Booking>(url, booking);
}

public getStorageUnitDetails(StorageUnitId:any): Observable<StorageUnit> {
  const url = `${this.baseUrl}/storageUnit/read/${StorageUnitId}`;
  return this.http.get<StorageUnit>(url);
}

// public updateBooking(booking: Booking): Observable<Booking> {
//     const url = `${this.baseUrl}/booking/update`;
//     return this.http.put<Booking>(url, booking);
// }

// public deleteBooking(bookingid: number): Observable<void> {
//     const url = `${this.baseUrl}/booking/delete/${bookingid}`;
//     return this.http.delete<void>(url);
// }

}
