import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ingredientes', component: IngredienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
