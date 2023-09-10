import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-email',
  templateUrl: './view-email.component.html',
  styleUrls: ['./view-email.component.css']
})
export class ViewEmailComponent {

  invoices!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('/api/invoices').subscribe((data: any[]) => {
      this.invoices = data;
    });
    
    
 }
}
