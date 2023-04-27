
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReviewComponent } from './component/review/review.component';
import { ReviewListComponent } from './component/review/review-list/review-list.component';
import { ReviewInsertComponent } from './component/review/review-insert/review-insert.component';

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

//componente Psicólogo
import { PsiComponent } from './component/psi/psi.component';
import { PsiListarComponent } from './component/psi/psi-listar/psi-listar.component';
import { PsiInsertarComponent } from './component/psi/psi-insertar/psi-insertar.component';

//componente Pagos
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentListarComponent } from './component/payment/payment-listar/payment-listar.component';
import { PaymentInsertarComponent } from './component/payment/payment-insertar/payment-insertar.component';
import { PaymentDialogoComponent } from './component/payment/payment-listar/payment-dialogo/payment-dialogo.component';

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

//componente Cita
import { CitaComponent } from './component/cita/cita.component';
import { CitaListarComponent } from './component/cita/cita-listar/cita-listar.component';
import { CitaInsertarComponent } from './component/cita/cita-insertar/cita-insertar.component';

import { CitaDialogoComponent } from './component/cita/cita-listar/cita-dialogo/cita-dialogo.component';

import { ReviewDialogComponent } from './component/review/review-list/review-dialog/review-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientListarComponent,
    HomeComponent,
    ClientInsertarComponent,
    PaymentComponent,
    PaymentListarComponent,
    PaymentInsertarComponent,
    PaymentDialogoComponent,
    PsiComponent,
    PsiListarComponent,
    PsiInsertarComponent,
    ReviewComponent,
    ReviewListComponent,
    ReviewInsertComponent,
    CitaComponent,
    CitaListarComponent,
    CitaInsertarComponent,
    CitaDialogoComponent,
    ReviewDialogComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
