import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/Services/collections.service';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.css']
})
export class DriverHomeComponent implements OnInit{

  public Drivertitle: string = "Drivers";
  public booking : Booking[] = [];

  constructor(private collection: CollectionsService){}
  ngOnInit(): void {
    this.getCollections();
  }

  getCollections():void {
    this.collection.fetchCollections().subscribe(booking => {
      this.booking = booking
      console.log(this.booking)
    } );
  }
}