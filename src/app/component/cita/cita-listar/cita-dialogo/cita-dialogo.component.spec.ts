import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaDialogoComponent } from './cita-dialogo.component';

describe('CitaDialogoComponent', () => {
  let component: CitaDialogoComponent;
  let fixture: ComponentFixture<CitaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
