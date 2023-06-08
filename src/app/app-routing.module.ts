import { PsiInsertarComponent } from './component/psi/psi-insertar/psi-insertar.component';
import { PsiComponent } from './component/psi/psi.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './component/review/review.component';
import { ReviewInsertComponent } from './component/review/review-insert/review-insert.component';
import { HomeComponent } from './component/home/home.component';
import { ClientComponent } from './component/client/client.component';
import { ClientInsertarComponent } from './component/client/client-insertar/client-insertar.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentInsertarComponent } from './component/payment/payment-insertar/payment-insertar.component';

import { AppoInsertarComponent } from './component/appointment/appo-insertar/appo-insertar.component';
import { AppointmentComponent } from './component/appointment/appointment.component';

import { SpecialtyComponent } from './component/specialty/specialty.component';
import { SpecialtyInsertComponent } from './component/specialty/specialty-insert/specialty-insert.component';
import { AppoStatusIngresarComponent } from './component/appointment-status/appo-status-ingresar/appo-status-ingresar.component';
import { AppointmentStatusComponent } from './component/appointment-status/appointment-status.component';
import { GenderComponent } from './component/gender/gender.component';
import { GenderListarComponent } from './component/gender/gender-listar/gender-listar.component';
import { GenderEditarComponent } from './component/gender/gender-editar/gender-editar.component';

import { UserstatusInsertarComponent } from './component/userstatus/userstatus-insertar/userstatus-insertar.component';
import { UserstatusComponent } from './component/userstatus/userstatus.component';
import { TurnComponent } from './component/turn/turn.component';
import { TurnInsertComponent } from './component/turn/turn-insert/turn-insert.component';
import { TurnstatusComponent } from './component/turnstatus/turnstatus.component';
import { TurnstatusInsertComponent } from './component/turnstatus/turnstatus-insert/turnstatus-insert.component';


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
        path: 'paymentsinsertar', component: PaymentInsertarComponent,
      },
      {
        path:'edicion/:id',component:PaymentInsertarComponent,
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
  //path para appointmet
  {
    path: 'Appointments',
    component: AppointmentComponent,
    children: [
      {
        path: 'appoinsertar',
        component: AppoInsertarComponent,
      },
      { path: 'edition/:id', component: AppoInsertarComponent },
    ],
  },
  //path para appointment statuss
  {
    path: 'AppointmentStatus',
    component: AppointmentStatusComponent,
    children: [
      {
        path: 'appoStatusinsertar',
        component: AppoStatusIngresarComponent,
      },
      { path: 'edition/:id', component: AppoStatusIngresarComponent },
    ],
  },
  //path para gender

  {
    path: 'gender',
    component: GenderComponent,
    children: [
      {
        path: 'genderinsert',
        component: GenderEditarComponent,
      },
      { path: 'edition/:id', component: GenderEditarComponent },
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
        { path:'edicion/:id',component:  UserstatusInsertarComponent},
      ],
    },
    //path para turns
    {
      path: 'turns',
      component: TurnComponent,
      children: [
        {
          path: 'turninsert',
          component: TurnInsertComponent,
        },
        { path:'edition/:id',component:  TurnInsertComponent},
      ],
    },
    //path para turnstatus
    {
      path: 'turnstatus',
      component: TurnstatusComponent,
      children: [
        {
          path: 'turnstatusinsert',
          component: TurnstatusInsertComponent,
        },
        { path:'edition/:id',component:  TurnstatusInsertComponent},
      ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
