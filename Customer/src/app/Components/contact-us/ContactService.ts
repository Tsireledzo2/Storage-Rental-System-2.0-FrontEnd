import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private backendUrl = 'https://storage-rental-system-2-0.onrender.com/contact/submit'; 

  constructor(private http: HttpClient) {}

  sendContactFormData(formData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}`, formData);
    
  }
}
