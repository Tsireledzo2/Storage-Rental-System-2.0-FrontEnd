import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { StorageUnit } from 'src/app/models/storage-unit';
import { StorageUnitService } from 'src/app/services/storage-unit.service';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.css']
})
export class StorageUnitComponent implements OnInit{
  public storageUnit? : StorageUnit;
   description: string = "";
   price: Number = 0;
   size: Number = 0;
   rooms: string[] = [];
   storageUnitSmall: StorageUnit[] = [];

  constructor(private storageService: StorageUnitService){

  }
  ngOnInit(): void {
    this.getStorages();
    //this.fetchRooms();
  }

  getStorages():void{
    this.storageService.fetchStorageUnit("123").subscribe(storageUnit => {
      this.storageUnit = storageUnit
      console.log(this.storageUnit.unitSizeDescription)
      this.description = this.storageUnit.unitSizeDescription;
      this.price = this.storageUnit.storageUnitType.price;
      this.size = this.storageUnit.storageUnitType.unitSize;
    });
  }

  fetchRooms() {
    this.storageService.sendRooms().subscribe(
      storageUnitSmall => {
        this.storageUnitSmall = storageUnitSmall;
        console.log(this.storageUnitSmall)
        // You can perform any other logic here after fetching the rooms
      },
      (error) => {
        console.error('Error fetching rooms:', error);
      }
    ); 
  }

  fetchMRooms() {
    this.storageService.sendMediumRooms().subscribe(
      storageUnitSmall => {
        this.storageUnitSmall = storageUnitSmall;
        console.log(this.storageUnitSmall)
        // You can perform any other logic here after fetching the rooms
      },
      (error) => {
        console.error('Error fetching rooms:', error);
      }
    ); 
  }

  fetchLRooms() {
    this.storageService.sendLargeRooms().subscribe(
      storageUnitSmall => {
        this.storageUnitSmall = storageUnitSmall;
        console.log(this.storageUnitSmall)
        // You can perform any other logic here after fetching the rooms
      },
      (error) => {
        console.error('Error fetching rooms:', error);
      }
    ); 
  }

  sendDataToBooking(StorageUnitId: string): void {
    this.storageService.setData(StorageUnitId);
  }
}
