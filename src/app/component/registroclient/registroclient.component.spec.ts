import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroclientComponent } from './registroclient.component';

describe('RegistroclientComponent', () => {
  let component: RegistroclientComponent;
  let fixture: ComponentFixture<RegistroclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
