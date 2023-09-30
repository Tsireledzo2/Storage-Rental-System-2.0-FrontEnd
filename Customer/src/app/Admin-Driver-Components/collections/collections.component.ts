import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent {
  public location: string = '143 Sir Lowry ForeShore Cape Town';

  constructor(private pageLocation: Location) {}

  goBack(): void {
    this.pageLocation.back();
  }
}