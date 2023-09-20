import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableStorageComponent } from './available-storage.component';

describe('AvailableStorageComponent', () => {
  let component: AvailableStorageComponent;
  let fixture: ComponentFixture<AvailableStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableStorageComponent]
    });
    fixture = TestBed.createComponent(AvailableStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
