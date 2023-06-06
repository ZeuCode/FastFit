import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnDialogComponent } from './turn-dialog.component';

describe('TurnDialogComponent', () => {
  let component: TurnDialogComponent;
  let fixture: ComponentFixture<TurnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
