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
//dentro de la etiqueta input_> mat-input required
//
//criterio de aceptacion corroborar todos los datos
//agragar criterio de aceptacion de calcelar -eliminar -si y no 2 como min
//diseñadores y usuarios criteria de aceptacion
//el monto max limite x dia
//ultima versiong
//mockup
//validaciones iconos x3
//
