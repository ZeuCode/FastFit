import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ClientInsertarComponent } from './component/client/client-insertar/client-insertar.component';


const routes: Routes = [
  //  path para elección de rol
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'clientsinsertar',
        component: ClientInsertarComponent
      },

    ],
  },

  {
    path: 'pages',
    loadChildren: () => import('./component/pages.module').then((m) => m.PagesModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
