import { Component, Input } from '@angular/core';
const logo = "https://i.imgur.com/P4iVJz0.png";
@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent {
  @Input()
  public title: string = "Lilyz Employees";
  
  logo = logo;
}
