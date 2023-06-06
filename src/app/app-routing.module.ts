import { PsiInsertarComponent } from './component/psi/psi-insertar/psi-insertar.component';
import { PsiComponent } from './component/psi/psi.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './component/review/review.component';
import { ReviewInsertComponent } from './component/review/review-insert/review-insert.component';
import { HomeComponent } from './component/home/home.component';
import { ClientComponent } from './component/client/client.component';
import { ClientListarComponent } from './component/client/client-listar/client-listar.component';
import { ClientInsertarComponent } from './component/client/client-insertar/client-insertar.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentInsertarComponent } from './component/payment/payment-insertar/payment-insertar.component';
import { CitaComponent } from './component/cita/cita.component';
import { CitaInsertarComponent } from './component/cita/cita-insertar/cita-insertar.component';

import { SpecialtyComponent } from './component/specialty/specialty.component';
import { SpecialtyInsertComponent } from './component/specialty/specialty-insert/specialty-insert.component';

import { UserstatusInsertarComponent } from './component/userstatus/userstatus-insertar/userstatus-insertar.component';
import { UserstatusComponent } from './component/userstatus/userstatus.component';
import { AppointmentstatusComponent } from './component/appointmentstatus/appointmentstatus.component';
import { AppointmentstatusInsertComponent } from './component/appointmentstatus/appointmentstatus-insert/appointmentstatus-insert.component';

const routes: Routes = [
  //path para el HOME
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  //path para clients
  {
    path: 'clients',
    component: ClientComponent,
    children: [
      {
        path: 'clientsinsertar',
        component: ClientInsertarComponent,
      },
      {
        path: 'edicion/:id',
        component: ClientInsertarComponent,
      },
    ],
  },
  //payment component
  {
    path: 'payment',
    component: PaymentComponent,
    children: [
      {
        path: 'paymentsinsertar',
        component: PaymentInsertarComponent,
      },
      {
        path: 'edicion/:id',
        component: PaymentInsertarComponent,
      },
    ],
  },

  {
    path: 'specialty',
    component: SpecialtyComponent,
    children: [
      {
        path: 'specialtyinsertar',
        component: SpecialtyInsertComponent,
      },
      {
        path: 'edicion/:id',
        component: SpecialtyInsertComponent,
      },
    ],
  },
  //path para psicologos
  {
    path: 'psis',
    component: PsiComponent,
    children: [
      {
        path: 'psisinsertar',
        component: PsiInsertarComponent,
      },
      { path: 'edicion/:id', component: PsiInsertarComponent },
    ],
  },
  //path para reviews
  {
    path: 'reviews',
    component: ReviewComponent,
    children: [
      {
        path: 'reviewinsert',
        component: ReviewInsertComponent,
      },
      {
        path: 'edition/:id',
        component: ReviewInsertComponent,
      },
    ],
  },

  //path para citas
  {
    path: 'citas',
    component: CitaComponent,
    children: [
      {
        path: 'citainsertar',
        component: CitaInsertarComponent,
      },
      { path: 'edicion/:id', component: CitaInsertarComponent },
    ],
  },
  //path para userstatus
  {
    path: 'UserStatus',
    component: UserstatusComponent,
    children: [
      {
        path: 'userstatusinsertar',
        component: UserstatusInsertarComponent,
      },
      { path: 'edicion/:id', component: UserstatusInsertarComponent },
    ],
  },
  //path para appointmentStatus
  {
    path: 'appointmentstatus',
    component: AppointmentstatusComponent,
    children: [
      {
        path: 'userstatusinsertar',
        component: UserstatusInsertarComponent,
      },
      { path: 'edicion/:id', component: AppointmentstatusInsertComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
