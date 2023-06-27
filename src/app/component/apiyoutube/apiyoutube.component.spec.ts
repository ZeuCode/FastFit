import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiyoutubeComponent } from './apiyoutube.component';

describe('ApiyoutubeComponent', () => {
  let component: ApiyoutubeComponent;
  let fixture: ComponentFixture<ApiyoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiyoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiyoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
