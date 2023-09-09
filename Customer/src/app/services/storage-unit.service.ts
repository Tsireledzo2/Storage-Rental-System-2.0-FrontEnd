import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageUnitService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
}
