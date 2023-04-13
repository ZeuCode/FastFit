import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ClientComponent } from './component/client/client.component';
import { ClientListarComponent } from './component/client/client-listar/client-listar.component';

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
        component: ClientListarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
