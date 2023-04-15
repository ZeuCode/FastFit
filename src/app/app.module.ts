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
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

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
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
