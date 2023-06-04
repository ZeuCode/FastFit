
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


//componenete HOME
import { HomeComponent } from './component/home/home.component';

//componente Client
import { ClientComponent } from './component/client/client.component';
import { ClientListarComponent } from './component/client/client-listar/client-listar.component';
import { ClientInsertarComponent } from './component/client/client-insertar/client-insertar.component';
import { ClientDialogoComponent } from './component/client/client-listar/client-dialogo/client-dialogo.component';

//componente Psicólogo
import { PsiComponent } from './component/psi/psi.component';
import { PsiListarComponent } from './component/psi/psi-listar/psi-listar.component';
import { PsiInsertarComponent } from './component/psi/psi-insertar/psi-insertar.component';
import { PsiDialogoComponent } from './component/psi/psi-listar/psi-dialogo/psi-dialogo.component';

//componente Pagos
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentListarComponent } from './component/payment/payment-listar/payment-listar.component';
import { PaymentInsertarComponent } from './component/payment/payment-insertar/payment-insertar.component';
import { PaymentDialogoComponent } from './component/payment/payment-listar/payment-dialogo/payment-dialogo.component';


//compente Reseñas
import { ReviewComponent } from './component/review/review.component';
import { ReviewListComponent } from './component/review/review-list/review-list.component';
import { ReviewInsertComponent } from './component/review/review-insert/review-insert.component';
import { ReviewDialogComponent } from './component/review/review-list/review-dialog/review-dialog.component';


//componente Cita

import { AppointmentComponent } from './component/appointment/appointment.component';
import { AppoInsertarComponent } from './component/appointment/appo-insertar/appo-insertar.component';
import { AppoListarComponent } from './component/appointment/appo-listar/appo-listar.component';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

//Angular cdk
import { LayoutModule } from '@angular/cdk/layout';
import { AppoDialogoComponent } from './component/appointment/appo-listar/appo-dialogo/appo-dialogo.component';

//componenete Especialidad
import { SpecialtyComponent } from './component/specialty/specialty.component';
import { SpecialtyListarComponent } from './component/specialty/specialty-listar/specialty-listar.component';
import { SpecialtyInsertComponent } from './component/specialty/specialty-insert/specialty-insert.component';
import { SpecialtyDialogComponent } from './component/specialty/specialty-listar/specialty-dialog/specialty-dialog.component';


//componente appointment Status
import { AppointmentStatusComponent } from './component/appointment-status/appointment-status.component';
import { AppoStatusIngresarComponent } from './component/appointment-status/appo-status-ingresar/appo-status-ingresar.component';
import { AppoStatusListarComponent } from './component/appointment-status/appo-status-listar/appo-status-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

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
    ClientDialogoComponent,
    PsiDialogoComponent,
    AppointmentComponent,
    AppoInsertarComponent,
    AppoListarComponent,
    AppoDialogoComponent,
    ReviewDialogComponent,
    SpecialtyComponent,
    SpecialtyListarComponent,
    SpecialtyDialogComponent,
    SpecialtyInsertComponent,
    AppointmentStatusComponent,
    AppoStatusListarComponent,
    AppoStatusIngresarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
