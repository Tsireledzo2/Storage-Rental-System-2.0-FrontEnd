import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  fetchCollections(): Observable<Booking[]> {
    const url = `${this.baseUrl}/booking/collections`;
    return this.http.get<Booking[]>(url);
  }
}
