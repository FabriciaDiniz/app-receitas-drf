import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReceitaComponent } from './receita.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { ConexaoService } from './../conexao.service';
import { ReceitaRoutingModule } from './receita.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReceitaRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ReceitaComponent, ReceitaDetalheComponent],
  providers: [ConexaoService],
})
export class ReceitaModule {}
