import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnstatusListComponent } from './turnstatus-list.component';

describe('TurnstatusListComponent', () => {
  let component: TurnstatusListComponent;
  let fixture: ComponentFixture<TurnstatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnstatusListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnstatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
