import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnInsertComponent } from './turn-insert.component';

describe('TurnInsertComponent', () => {
  let component: TurnInsertComponent;
  let fixture: ComponentFixture<TurnInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
