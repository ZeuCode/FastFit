import { PsiInsertarComponent } from './component/psi/psi-insertar/psi-insertar.component';
import { PsiComponent } from './component/psi/psi.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'psis',component:PsiComponent,children:[{
      path:'psisinsertar', component:PsiInsertarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
