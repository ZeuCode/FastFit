import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentListarComponent } from './payment-listar.component';

describe('PaymentListarComponent', () => {
  let component: PaymentListarComponent;
  let fixture: ComponentFixture<PaymentListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
