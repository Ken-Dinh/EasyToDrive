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
import { PageAccueilComponent } from './component/page-accueil/page-accueil.component';
import { adminAuthGuard } from './guard/admin-auth.guard';
import { LoginAdminComponent } from './component/login-admin/login-admin.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { LoginAutoecoleComponent } from './component/login-autoecole/login-autoecole.component';
import { EleveDashboardComponent } from './component/eleve-dashboard/eleve-dashboard.component';


const routes: Routes = [
  {path: "login-eleve", component: LoginEleveComponent},
  {path: "login-admin", component: LoginAdminComponent},
  {path: "login-autoecole", component: LoginAutoecoleComponent},
  // Formulaire pour modifier et ajouter des trucs dans la base de donnée (pour l'admin)
  {path: "admin-dashboard", component: AdminDashboardComponent, canActivate: [adminAuthGuard]},
  {path: "add-eleve", component: AddEleveComponent, canActivate: [adminAuthGuard]},
  {path: "add-examen", component: AddExamenComponent, canActivate: [adminAuthGuard]},
  {path: "add-test", component: AddTestComponent, canActivate: [adminAuthGuard]},
  {path: "add-simulation", component: AddSimulationComponent, canActivate: [adminAuthGuard]},
  {path: "put-eleve", component: PutEleveComponent, canActivate: [adminAuthGuard]},
  {path: "put-examen", component: PutExamenComponent, canActivate: [adminAuthGuard]},
  {path: "put-test", component: PutTestComponent, canActivate: [adminAuthGuard]},
  {path: "put-simulation", component: PutSimulationComponent, canActivate: [adminAuthGuard]},
  {path: "eleve-dashboard", component: EleveDashboardComponent}, 
  {path: "", component: PageAccueilComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
