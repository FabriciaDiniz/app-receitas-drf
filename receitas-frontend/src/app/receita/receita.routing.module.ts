import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaComponent } from './receita.component';

const receitaRoutes: Routes = [
  { path: 'receitas', component: ReceitaComponent },
  { path: 'receitas/:id', component: ReceitaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(receitaRoutes)],
  exports: [RouterModule]
})

export class ReceitaRoutingModule { }
