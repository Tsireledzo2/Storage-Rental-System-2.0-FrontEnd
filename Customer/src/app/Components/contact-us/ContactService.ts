import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private backendUrl = 'http://localhost:8080/contact/submit'; 

  constructor(private http: HttpClient) {}

  sendContactFormData(formData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}`, formData);
    
  }
}
