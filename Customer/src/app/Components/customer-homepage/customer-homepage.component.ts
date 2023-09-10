import { Component,OnInit  } from '@angular/core';

declare var AOS: any;


@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})
export class CustomerHomepageComponent {

  ngOnInit() {
    AOS.init();
  }
  
}


