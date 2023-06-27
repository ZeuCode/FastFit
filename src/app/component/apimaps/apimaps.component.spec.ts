import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimapsComponent } from './apimaps.component';

describe('ApimapsComponent', () => {
  let component: ApimapsComponent;
  let fixture: ComponentFixture<ApimapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApimapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApimapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
