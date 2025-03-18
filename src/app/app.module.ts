import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEleveComponent } from './component/add-eleve/add-eleve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginEleveComponent } from './component/login-eleve/login-eleve.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEleveComponent,
    LoginEleveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
