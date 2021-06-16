import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlComponent } from './url/url.component';



@NgModule({
  imports: [RouterModule.forRoot([{path: 'url', component: UrlComponent},])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
