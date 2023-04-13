import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './component/review/review.component';
import { ReviewInsertComponent } from './component/review/review-insert/review-insert.component';

const routes: Routes = [
  {
    path: 'reviews',component:ReviewComponent,children:[
      {
        path:'reviewinsert',component: ReviewInsertComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
