import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import localFr from '@angular/common/locales/fr';
registerLocaleData(localFr, "fr");

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageAccueilComponent } from './component/page-accueil/page-accueil.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { LoginAdminComponent } from './component/login-admin/login-admin.component';
import { LoginAutoecoleComponent } from './component/login-autoecole/login-autoecole.component';
import { LoginEleveComponent } from './component/login-eleve/login-eleve.component';

import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { EleveDashboardComponent } from './component/eleve-dashboard/eleve-dashboard.component';

import { AddAvisComponent } from './component/add-avis/add-avis.component';
import { AddEleveComponent } from './component/add-eleve/add-eleve.component';
import { AddExamenComponent } from './component/add-examen/add-examen.component';
import { AddSimulationComponent } from './component/add-simulation/add-simulation.component';
import { AddTestComponent } from './component/add-test/add-test.component';

import { PutEleveComponent } from './component/put-eleve/put-eleve.component';
import { PutExamenComponent } from './component/put-examen/put-examen.component';
import { PutSimulationComponent } from './component/put-simulation/put-simulation.component';
import { PutTestComponent } from './component/put-test/put-test.component';

import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { Voiture3DComponent } from './component/voiture3-d/voiture3-d.component';
import { registerLocaleData } from '@angular/common';
import { ReplaceCharPipe } from './pipe/replacechar.pipe';
import { LogoutComponent } from './component/logout/logout.component';
import { DeletePopupComponent } from './component/delete-popup/delete-popup.component';
import { AutoEcoleDashboardComponent } from './component/autoecole-dashboard/autoecole-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    HeaderComponent,
    FooterComponent,
    LoginAdminComponent,
    LoginAutoecoleComponent,
    LoginEleveComponent,
    AdminDashboardComponent,
    EleveDashboardComponent,
    AddAvisComponent,
    AddEleveComponent,
    AddExamenComponent,
    AddSimulationComponent,
    AddTestComponent,
    PutEleveComponent,
    PutExamenComponent,
    PutSimulationComponent,
    PutTestComponent,
    CardComponent,
    TableComponent,
    Voiture3DComponent,
    ReplaceCharPipe,
    LogoutComponent,
    DeletePopupComponent,
    AutoEcoleDashboardComponent

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