import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnstatusComponent } from './turnstatus.component';

describe('TurnstatusComponent', () => {
  let component: TurnstatusComponent;
  let fixture: ComponentFixture<TurnstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
