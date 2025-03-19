import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEleveComponent } from './component/add-eleve/add-eleve.component';
import { LoginEleveComponent } from './component/login-eleve/login-eleve.component';
import { AddExamenComponent } from './component/add-examen/add-examen.component';
import { AddTestComponent } from './component/add-test/add-test.component';
import { AddSimulationComponent } from './component/add-simulation/add-simulation.component';
import { PutEleveComponent } from './component/put-eleve/put-eleve.component';
import { PutExamenComponent } from './component/put-examen/put-examen.component';
import { PutTestComponent } from './component/put-test/put-test.component';
import { PutSimulationComponent } from './component/put-simulation/put-simulation.component';
const routes: Routes = [
  {path: 'login-eleve', component: LoginEleveComponent},
  // Formulaire pour modifier et ajouter des trucs dans la base de donnée (pour l'admin)
  {path: "add-eleve", component: AddEleveComponent},
  {path: "add-examen", component: AddExamenComponent},
  {path: "add-test", component: AddTestComponent},
  {path: "add-simulation", component: AddSimulationComponent},
  {path: "put-eleve", component: PutEleveComponent},
  {path: "put-examen", component: PutExamenComponent},
  {path: "put-test", component: PutTestComponent},
  {path: "put-simulation", component: PutSimulationComponent}
  // {path: "", component: Homepage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
