import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredienteComponent } from './ingrediente/ingrediente.component';

const appRoutes: Routes = [
  { path: 'ingredientes', component: IngredienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
