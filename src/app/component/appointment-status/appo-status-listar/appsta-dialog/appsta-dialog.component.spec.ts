import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstaDialogComponent } from './appsta-dialog.component';

describe('AppstaDialogComponent', () => {
  let component: AppstaDialogComponent;
  let fixture: ComponentFixture<AppstaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppstaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppstaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
