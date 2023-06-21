import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistroclientComponent } from './component/registroclient/registroclient.component';


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
        path: 'clientregister',
        component: RegistroclientComponent
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
