import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddEleveComponent } from './component/add-eleve/add-eleve.component';
import { LoginEleveComponent } from './component/login-eleve/login-eleve.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { AddExamenComponent } from './component/add-examen/add-examen.component';
import { AddTestComponent } from './component/add-test/add-test.component';
import { AddSimulationComponent } from './component/add-simulation/add-simulation.component';
import { PutEleveComponent } from './component/put-eleve/put-eleve.component';
import { PutExamenComponent } from './component/put-examen/put-examen.component';
import { PutSimulationComponent } from './component/put-simulation/put-simulation.component';
import { PutTestComponent } from './component/put-test/put-test.component';
import { BouttonComponent } from './component/boutton/boutton.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEleveComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    LoginEleveComponent,
    AddExamenComponent,
    AddTestComponent,
    AddSimulationComponent,
    PutEleveComponent,
    PutExamenComponent,
    PutSimulationComponent,
    PutTestComponent,
    BouttonComponent
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
