import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportepsireviewComponent } from './reportepsireview.component';

describe('ReportepsireviewComponent', () => {
  let component: ReportepsireviewComponent;
  let fixture: ComponentFixture<ReportepsireviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportepsireviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportepsireviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
