import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnstatusInsertComponent } from './turnstatus-insert.component';

describe('TurnstatusInsertComponent', () => {
  let component: TurnstatusInsertComponent;
  let fixture: ComponentFixture<TurnstatusInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnstatusInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnstatusInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
