import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StorageUnit } from 'src/app/models/storage-unit';
import { StorageUnitService } from 'src/app/services/storage-unit.service';

@Component({
  selector: 'app-available-storage',
  templateUrl: './available-storage.component.html',
  styleUrls: ['./available-storage.component.css']
})
export class AvailableStorageComponent implements OnInit{
  @Input()
  rooms?: StorageUnit;

  constructor(private storageService: StorageUnitService){

  }
  ngOnInit(): void {
    //this.sendDataToBooking();
  }

  sendDataToBooking(): void {
    var StorageUnitId = this.rooms?.unitId;
    console.log(StorageUnitId);
    this.storageService.setData(StorageUnitId);
  }

}
