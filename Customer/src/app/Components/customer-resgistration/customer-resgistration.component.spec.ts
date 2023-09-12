import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerResgistrationComponent } from './customer-resgistration.component';

describe('CustomerResgistrationComponent', () => {
  let component: CustomerResgistrationComponent;
  let fixture: ComponentFixture<CustomerResgistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerResgistrationComponent]
    });
    fixture = TestBed.createComponent(CustomerResgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
