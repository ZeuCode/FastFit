import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PagesRoutingModule } from './pages-routing.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

//componente Client
import { ClientComponent } from './client/client.component';
import { ClientListarComponent } from './client/client-listar/client-listar.component';
import { ClientInsertarComponent } from './client/client-insertar/client-insertar.component';
import { ClientDialogoComponent } from './client/client-listar/client-dialogo/client-dialogo.component';

//componente Psicólogo
import { PsiComponent } from './psi/psi.component';
import { PsiListarComponent } from './psi/psi-listar/psi-listar.component';
import { PsiInsertarComponent } from './psi/psi-insertar/psi-insertar.component';
import { PsiDialogoComponent } from './psi/psi-listar/psi-dialogo/psi-dialogo.component';

//componente Pagos
import { PaymentComponent } from './payment/payment.component';
import { PaymentListarComponent } from './payment/payment-listar/payment-listar.component';
import { PaymentInsertarComponent } from './payment/payment-insertar/payment-insertar.component';
import { PaymentDialogoComponent } from './payment/payment-listar/payment-dialogo/payment-dialogo.component';

//compente Reseñas
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewInsertComponent } from './review/review-insert/review-insert.component';
import { ReviewDialogComponent } from './review/review-list/review-dialog/review-dialog.component';

//componente Cita
import { AppointmentComponent } from './appointment/appointment.component';
import { AppoInsertarComponent } from './appointment/appo-insertar/appo-insertar.component';
import { AppoListarComponent } from './appointment/appo-listar/appo-listar.component';
import { AppoDialogoComponent } from './appointment/appo-listar/appo-dialogo/appo-dialogo.component';

//componenete Especialidad
import { SpecialtyComponent } from './specialty/specialty.component';
import { SpecialtyListarComponent } from './specialty/specialty-listar/specialty-listar.component';
import { SpecialtyInsertComponent } from './specialty/specialty-insert/specialty-insert.component';
import { SpecialtyDialogComponent } from './specialty/specialty-listar/specialty-dialog/specialty-dialog.component';

//componente appointment Status
import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';
import { AppoStatusIngresarComponent } from './appointment-status/appo-status-ingresar/appo-status-ingresar.component';
import { AppoStatusListarComponent } from './appointment-status/appo-status-listar/appo-status-listar.component';

//componente gender
import { GenderComponent } from './gender/gender.component';
import { GenderListarComponent } from './gender/gender-listar/gender-listar.component';
import { GenderEditarComponent } from './gender/gender-editar/gender-editar.component';
import { GenderDialogComponent } from './gender/gender-listar/gender-dialog/gender-dialog.component';
import { AppstaDialogComponent } from './appointment-status/appo-status-listar/appsta-dialog/appsta-dialog.component';

//componenete userstatus
import { UserstatusInsertarComponent } from './userstatus/userstatus-insertar/userstatus-insertar.component';
import { UserstatusListarComponent } from './userstatus/userstatus-listar/userstatus-listar.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { UserstatusDialogoComponent } from './userstatus/userstatus-listar/userstatus-dialogo/userstatus-dialogo.component';

//componet turn
import { TurnComponent } from './turn/turn.component';
import { TurnInsertComponent } from './turn/turn-insert/turn-insert.component';
import { TurnListComponent } from './turn/turn-list/turn-list.component';
import { TurnDialogComponent } from './turn/turn-list/turn-dialog/turn-dialog.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Repore1Component } from './dashboard/repore1/repore1.component';
import { ReportepsireviewComponent } from './reportepsireview/reportepsireview.component';



@NgModule({
  declarations: [
    ClientComponent,
    ClientListarComponent,
    ClientInsertarComponent,
    ClientDialogoComponent,

    PaymentComponent,
    PaymentListarComponent,
    PaymentInsertarComponent,
    PaymentDialogoComponent,

    PsiComponent,
    PsiListarComponent,
    PsiInsertarComponent,
    PsiDialogoComponent,

    ReviewComponent,
    ReviewListComponent,
    ReviewInsertComponent,
    ReviewDialogComponent,

    AppointmentComponent,
    AppoInsertarComponent,
    AppoListarComponent,
    AppoDialogoComponent,

    SpecialtyComponent,
    SpecialtyListarComponent,
    SpecialtyDialogComponent,
    SpecialtyInsertComponent,

    AppointmentStatusComponent,
    AppoStatusListarComponent,
    AppoStatusIngresarComponent,
    AppstaDialogComponent,

    GenderComponent,
    GenderListarComponent,
    GenderEditarComponent,
    GenderDialogComponent,

    UserstatusInsertarComponent,
    UserstatusListarComponent,
    UserstatusComponent,
    UserstatusDialogoComponent,

    TurnComponent,
    TurnInsertComponent,
    TurnListComponent,
    TurnDialogComponent,

    DashboardComponent,

    Repore1Component,
      ReportepsireviewComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule,
    PagesRoutingModule,

    MatDialogModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  exports: [
    MatFormFieldModule
  ]
})
export class PagesModule{}
