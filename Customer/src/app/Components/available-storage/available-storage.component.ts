import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StorageUnit } from 'src/app/models/storage-unit';
import { StorageUnitService } from 'src/app/services/storage-unit.service';

@Component({
  selector: 'app-available-storage',
  templateUrl: './available-storage.component.html',
  styleUrls: ['./available-storage.component.css']
})
export class AvailableStorageComponent {
  @Input()
  rooms?: StorageUnit;

  constructor(private storageService: StorageUnitService){

  }

  sendDataToBooking(): void {
    var StorageUnitId = this.rooms?.unitId;
    this.storageService.setData(StorageUnitId);
  }

}
