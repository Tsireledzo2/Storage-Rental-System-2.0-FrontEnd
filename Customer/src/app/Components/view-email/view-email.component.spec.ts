import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmailComponent } from './view-email.component';

describe('ViewEmailComponent', () => {
  let component: ViewEmailComponent;
  let fixture: ComponentFixture<ViewEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmailComponent]
    });
    fixture = TestBed.createComponent(ViewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
