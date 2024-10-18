import { Injectable } from '@angular/core';
import { Address } from '../models-ad-dri/address';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  private baseUrl = 'https://storage-rental-system-2-0.onrender.com/address';

  constructor(private http: HttpClient) { }

  public addAddress(address: Address): Observable<Address> {
    const url = `${this.baseUrl}/create`;
    return this.http.post<Address>(url, address);
}
}
