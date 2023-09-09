import { Component, OnInit } from '@angular/core';
import { StorageUnit } from 'src/app/models/storage-unit';
import { StorageUnitService } from 'src/app/services/storage-unit.service';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.css']
})
export class StorageUnitComponent implements OnInit{
  public storageUnit? : StorageUnit;

  constructor(private storageService: StorageUnitService){

  }
  ngOnInit(): void {
    this.getStorages();
  }

  getStorages():void{
    this.storageService.fetchStorageUnit("jfhhe789").subscribe(storageUnit => {
      this.storageUnit = storageUnit
      console.log(this.storageUnit.unitSizeDescription)
    });
  }
}
