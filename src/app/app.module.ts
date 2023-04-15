import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './component/client/client.component';
import { ClientListarComponent } from './component/client/client-listar/client-listar.component';
import { HomeComponent } from './component/home/home.component';
import { ClientInsertarComponent } from './component/client/client-insertar/client-insertar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentListarComponent } from './component/payment/payment-listar/payment-listar.component';
import { PaymentInsertarComponent } from './component/payment/payment-insertar/payment-insertar.component';
import { CitaComponent } from './component/cita/cita.component';
import { CitaListarComponent } from './component/cita/cita-listar/cita-listar.component';
import { CitaInsertarComponent } from './component/cita/cita-insertar/cita-insertar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';

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
    CitaComponent,
    CitaListarComponent,
    CitaInsertarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
