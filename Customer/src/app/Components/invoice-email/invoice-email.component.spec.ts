import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceEmailComponent } from './invoice-email.component';

describe('InvoiceEmailComponent', () => {
  let component: InvoiceEmailComponent;
  let fixture: ComponentFixture<InvoiceEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceEmailComponent]
    });
    fixture = TestBed.createComponent(InvoiceEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
