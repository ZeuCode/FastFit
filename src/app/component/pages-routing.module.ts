import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ClientComponent } from './client/client.component';
import { ClientInsertarComponent } from './client/client-insertar/client-insertar.component';

import { PsiComponent } from './psi/psi.component';
import { PsiInsertarComponent } from './psi/psi-insertar/psi-insertar.component';

import { PaymentComponent } from './payment/payment.component';
import { PaymentInsertarComponent } from './payment/payment-insertar/payment-insertar.component';

import { SpecialtyComponent } from './specialty/specialty.component';
import { SpecialtyInsertComponent } from './specialty/specialty-insert/specialty-insert.component';

import { ReviewComponent } from './review/review.component';
import { ReviewInsertComponent } from './review/review-insert/review-insert.component';

import { AppointmentComponent } from './appointment/appointment.component';
import { AppoInsertarComponent } from './appointment/appo-insertar/appo-insertar.component';

import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';
import { AppoStatusIngresarComponent } from './appointment-status/appo-status-ingresar/appo-status-ingresar.component';

import { GenderComponent } from './gender/gender.component';
import { GenderEditarComponent } from './gender/gender-editar/gender-editar.component';

import { UserstatusComponent } from './userstatus/userstatus.component';
import { UserstatusInsertarComponent } from './userstatus/userstatus-insertar/userstatus-insertar.component';

import { TurnComponent } from './turn/turn.component';
import { TurnInsertComponent } from './turn/turn-insert/turn-insert.component';
import { ReportepsireviewComponent } from './reportepsireview/reportepsireview.component';
import { ReportreviewpsiComponent } from './reportreviewpsi/reportreviewpsi.component';

import { ReportpsispecComponent } from './reportpsispec/reportpsispec.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardService],
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
    canActivate: [GuardService],
  },

  //path para psicologos
  {
    path: 'Psychologists',
    component: PsiComponent,
    children: [
      {
        path: 'psisinsertar',
        component: PsiInsertarComponent,
      },
      { path: 'edicion/:id', component: PsiInsertarComponent },
    ],
    canActivate: [GuardService],
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
    canActivate: [GuardService],
  },

  //spceialty component
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
    canActivate: [GuardService],
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
    canActivate: [GuardService],
  },

  //path reviews  psicologo
  {
    path: 'reviewspsi',
    component: ReportepsireviewComponent
  },

  //path reviews  psicologo para ADMIN
  {
    path: 'reportreviewpsi',
    component: ReportreviewpsiComponent
  },
  
  //path specialty  psicologo para ADMIN
  {
    path: 'reportspecpsi',
    component: ReportpsispecComponent
  },

  //path para appointmet
  {
    path: 'appointments',
    component: AppointmentComponent,
    children: [
      {
        path: 'appoinsertar',
        component: AppoInsertarComponent,
      },
      { path: 'edition/:id', component: AppoInsertarComponent },
    ],
    canActivate: [GuardService],
  },

  //path para appointment statuss
  {
    path: 'appointmentstatus',
    component: AppointmentStatusComponent,
    children: [
      {
        path: 'appostatusinsertar',
        component: AppoStatusIngresarComponent,
      },
      { path: 'edition/:id', component: AppoStatusIngresarComponent },
    ],
    canActivate: [GuardService],
  },

  //path para gender
  {
    path: 'genders',
    component: GenderComponent,
    children: [
      {
        path: 'genderinsert',
        component: GenderEditarComponent,
      },
      { path: 'edition/:id', component: GenderEditarComponent },
    ],
    canActivate: [GuardService],
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
    canActivate: [GuardService],
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
      { path: 'edition/:id', component: TurnInsertComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
