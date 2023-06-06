
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
import { CitaComponent } from './component/cita/cita.component';
import { CitaListarComponent } from './component/cita/cita-listar/cita-listar.component';
import { CitaInsertarComponent } from './component/cita/cita-insertar/cita-insertar.component';
import { CitaDialogoComponent } from './component/cita/cita-listar/cita-dialogo/cita-dialogo.component';

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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
//Angular cdk
import { LayoutModule } from '@angular/cdk/layout';

//componenete Especialidad
import { SpecialtyComponent } from './component/specialty/specialty.component';
import { SpecialtyListarComponent } from './component/specialty/specialty-listar/specialty-listar.component';
import { SpecialtyInsertComponent } from './component/specialty/specialty-insert/specialty-insert.component';
import { SpecialtyDialogComponent } from './component/specialty/specialty-listar/specialty-dialog/specialty-dialog.component';

//componenete userstatus
import { UserstatusInsertarComponent } from './component/userstatus/userstatus-insertar/userstatus-insertar.component';
import { UserstatusListarComponent } from './component/userstatus/userstatus-listar/userstatus-listar.component';
import { UserstatusComponent } from './component/userstatus/userstatus.component';
import { UserstatusDialogoComponent } from './component/userstatus/userstatus-listar/userstatus-dialogo/userstatus-dialogo.component';
import { TurnComponent } from './component/turn/turn.component';
import { TurnInsertComponent } from './component/turn/turn-insert/turn-insert.component';
import { TurnListComponent } from './component/turn/turn-list/turn-list.component';
import { TurnDialogComponent } from './component/turn/turn-list/turn-dialog/turn-dialog.component';


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

    CitaComponent,
    CitaListarComponent,
    CitaInsertarComponent,
    CitaDialogoComponent,

    SpecialtyComponent,
    SpecialtyListarComponent,
    SpecialtyDialogComponent,
    SpecialtyInsertComponent,

    UserstatusInsertarComponent,
    UserstatusListarComponent,
    UserstatusComponent,
    UserstatusDialogoComponent,
    TurnComponent,
    TurnInsertComponent,
    TurnListComponent,
    TurnDialogComponent,

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
    MatPaginatorModule,
    MatSlideToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
