import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportreviewpsiComponent } from './reportreviewpsi.component';

describe('ReportreviewpsiComponent', () => {
  let component: ReportreviewpsiComponent;
  let fixture: ComponentFixture<ReportreviewpsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportreviewpsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportreviewpsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
