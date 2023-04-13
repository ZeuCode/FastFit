import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ClientComponent } from './component/client/client.component';
import { ClientListarComponent } from './component/client/client-listar/client-listar.component';
import { ClientInsertarComponent } from './component/client/client-insertar/client-insertar.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentInsertarComponent } from './component/payment/payment-insertar/payment-insertar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clients',
    component: ClientComponent,
    children: [
      {
        path: 'clientsinsertar',
        component: ClientInsertarComponent,
      },
    ],
  },

  {
    path:'payment',component:PaymentComponent,children:[{
      path:'paymentsinsertar',component:PaymentInsertarComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
