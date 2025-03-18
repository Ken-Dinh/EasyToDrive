import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEleveComponent } from './component/add-eleve/add-eleve.component';
import { LoginEleveComponent } from './component/login-eleve/login-eleve.component';
import { AddExamenComponent } from './component/add-examen/add-examen.component';
import { AddTestComponent } from './component/add-test/add-test.component';
const routes: Routes = [
  {path: "add-eleve", component: AddEleveComponent},
  {path: 'login-eleve', component: LoginEleveComponent},
  {path: "add-examen", component: AddExamenComponent},
  {path: "add-test", component: AddTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
