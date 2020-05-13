import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaComponent } from './receita.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';

const receitaRoutes: Routes = [
  { path: 'receitas', component: ReceitaComponent },
  { path: 'receitas/:id', component: ReceitaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(receitaRoutes)],
  exports: [RouterModule]
})

export class ReceitaRoutingModule { }
