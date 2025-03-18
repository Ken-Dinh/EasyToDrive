import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEleveComponent } from './component/add-eleve/add-eleve.component';

const routes: Routes = [
  {path: "add-eleve", component: AddEleveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
