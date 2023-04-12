import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInsertarComponent } from './payment-insertar.component';

describe('PaymentInsertarComponent', () => {
  let component: PaymentInsertarComponent;
  let fixture: ComponentFixture<PaymentInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInsertarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
