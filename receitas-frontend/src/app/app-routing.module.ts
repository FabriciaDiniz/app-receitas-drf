import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaComponent } from './receita/receita.component';


const routes: Routes = [
  { path: 'receitas', component: ReceitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
