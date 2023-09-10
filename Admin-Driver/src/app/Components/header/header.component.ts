import { Component, Input } from '@angular/core';
const logo = "https://i.imgur.com/P4iVJz0.png";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Input()
  public title: string = "Lilyz Employees";
  
  logo = logo;
}
