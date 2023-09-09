import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';
import { Vehicle } from '../models/vehicle';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080'; // Replace with your API URL

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

deleteDriver(driverId: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/driver/deleteDriver/${driverId}`);
}

addVehicle(driver: Vehicle): Observable<Vehicle> {
  return this.http.post<Vehicle>(`${this.baseUrl}/driver/createDriver`, driver);
}
}