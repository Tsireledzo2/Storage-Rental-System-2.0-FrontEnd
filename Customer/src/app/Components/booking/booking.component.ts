import { Component, OnInit } from '@angular/core';
import { StorageUnit } from 'src/app/models/storage-unit';
import { StorageUnitService } from 'src/app/services/storage-unit.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent{
  quantity: number = 1;
  showExtraFields: boolean = false;
  

  incrementQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  toggleExtraFields(value: boolean) {
    this.showExtraFields = value;
  }

  

 
  
}
