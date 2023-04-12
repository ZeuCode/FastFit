import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './componet/review/review.component';
import { ReviewListComponent } from './componet/review/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
