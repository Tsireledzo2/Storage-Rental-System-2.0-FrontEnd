import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsListComponentComponent } from './bookings-list-component.component';

describe('BookingsListComponentComponent', () => {
  let component: BookingsListComponentComponent;
  let fixture: ComponentFixture<BookingsListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsListComponentComponent]
    });
    fixture = TestBed.createComponent(BookingsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
