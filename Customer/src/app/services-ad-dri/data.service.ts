import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models-ad-dri/driver';
import { Vehicle } from '../models-ad-dri/vehicle';
import { Booking } from '../models-ad-dri/booking';
import { Employee } from '../models-ad-dri/employee';
import { VehicleType } from '../models-ad-dri/vehicle-type';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.baseUrl}/driver/getAllDrivers`);
}

getVehicles(): Observable<Vehicle[]> {
  return this.http.get<Vehicle[]>(`${this.baseUrl}/vehicle/getAllVehicles`);
}

addDriver(driver: Driver): Observable<Driver> {
  return this.http.post<Driver>(`${this.baseUrl}/driver/createDriver`, driver);
}

deleteDriver(licenceNumber: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/driver/deleteDriver/${licenceNumber}`);
}

addVehicle(vehicle: Vehicle): Observable<Vehicle> {
  return this.http.post<Vehicle>(`${this.baseUrl}/vehicle/createVehicle`, vehicle);
}

getBookings(): Observable<Booking[]> {
  return this.http.get<Booking[]>(`${this.baseUrl}/booking/getAll`);
}

addEmployee(employee: Employee): Observable<Employee>{
  return this.http.post<Employee>(`${this.baseUrl}/createEmployee`, employee);
}

} 