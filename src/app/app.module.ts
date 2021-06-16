import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlComponent } from './url/url.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from './url/url.service';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    UrlComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [UrlService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
