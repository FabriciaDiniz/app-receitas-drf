import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaComponent } from './receita/receita.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';


const routes: Routes = [
  { path: 'receitas', component: ReceitaComponent },
  { path: 'ingredientes', component: IngredienteComponent },
  { path: 'receitas/:id', component: ReceitaComponent },
  { path: 'ingredientes/:id', component: IngredienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
