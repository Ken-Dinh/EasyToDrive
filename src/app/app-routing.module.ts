import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEleveComponent } from './component/login-eleve/login-eleve.component';

const routes: Routes = [
  {path: 'login-eleve', component: LoginEleveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
