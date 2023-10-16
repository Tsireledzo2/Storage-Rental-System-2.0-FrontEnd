import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employee } from '../models-ad-dri/employee';
import { Driver } from '../models-ad-dri/driver';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  fetchUserByEmail(employeeEmail: string, password: string): Observable<Employee> {
    const url = `${this.baseUrl}/login/${employeeEmail}/${password}`;
    return this.http.get<Employee>(url)
}

fetchAdminDriver(employeeNumber: string): Observable<Driver> {
  const url = `${this.baseUrl}/DriverAdminLogin/${employeeNumber}`;
  return this.http.get<Driver>(url);
}
}