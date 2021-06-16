import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UrlComponent } from './url/url.component';



@NgModule({
  imports: [RouterModule.forRoot([{path: 'url', component: UrlComponent}, {path: 'admin', component: AdminComponent}])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
