import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitaComponent } from './receita.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { ConexaoService } from './../conexao.service';
import { ReceitaRoutingModule } from './receita.routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReceitaRoutingModule,
    ],
    declarations: [
        ReceitaComponent,
        ReceitaDetalheComponent,
    ],
    providers: [ConexaoService]
})

export class ReceitaModule { }