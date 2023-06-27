import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportpsispecComponent } from './reportpsispec.component';

describe('ReportpsispecComponent', () => {
  let component: ReportpsispecComponent;
  let fixture: ComponentFixture<ReportpsispecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportpsispecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportpsispecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
