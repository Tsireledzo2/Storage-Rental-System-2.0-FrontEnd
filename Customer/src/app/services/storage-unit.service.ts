import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageUnit } from '../models/storage-unit';

@Injectable({
  providedIn: 'root'
})
export class StorageUnitService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  fetchStorageUnit(storageId: string): Observable<StorageUnit> {
    const url = `${this.baseUrl}/storageUnit/read/${storageId}`;
    return this.http.get<StorageUnit>(url);
  }
}
