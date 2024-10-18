import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StorageUnit } from '../models/storage-unit';

@Injectable({
  providedIn: 'root'
})
export class StorageUnitService {

  private baseUrl = 'https://storage-rental-system-2-0.onrender.com';

  constructor(private http: HttpClient) { }

  fetchStorageUnit(storageId: string): Observable<StorageUnit> {
    const url = `${this.baseUrl}/storageUnit/read/${storageId}`;
    return this.http.get<StorageUnit>(url);
  }

  rooms: string[] = ['room 1', 'room 2', 'room 3', 'room 4']; 
  sendRooms(): Observable<StorageUnit[]>{
    const url = `${this.baseUrl}/storageUnit/getStoragesBySize/Small`;
    return this.http.get<StorageUnit[]>(url);
  } 

  roomsMedium: string[] = ['Mroom 1', 'Mroom 2', 'Mroom 3', 'Mroom 4']; 
  sendMediumRooms(): Observable<StorageUnit[]>{
    const url = `${this.baseUrl}/storageUnit/getStoragesBySize/Medium`;
    return this.http.get<StorageUnit[]>(url);
  }
  roomsLarge: string[] = ['Lroom 1', 'Lroom 2', 'Lroom 3', ':Lroom 4']; 
  sendLargeRooms(): Observable<StorageUnit[]>{
    const url = `${this.baseUrl}/storageUnit/getStoragesBySize/Large`;
    return this.http.get<StorageUnit[]>(url);
  }

  private dataSubject = new BehaviorSubject<any>(''); // Initial value is an empty string
  data$ = this.dataSubject.asObservable();

  setData(data: any) {
    this.dataSubject.next(data);
  }

  private dataSubjects = new BehaviorSubject<any>(''); // Initial value is an empty string
  email$ = this.dataSubjects.asObservable();

  setEmail(data: any) {
    this.dataSubject.next(data);
  }
}
