import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnstatusdialogComponent } from './turnstatusdialog.component';

describe('TurnstatusdialogComponent', () => {
  let component: TurnstatusdialogComponent;
  let fixture: ComponentFixture<TurnstatusdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnstatusdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnstatusdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
