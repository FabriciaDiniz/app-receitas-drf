import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ReceitaComponent } from './receita.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { ConexaoService } from './../conexao.service';
import { ReceitaRoutingModule } from './receita.routing.module';
import { ReceitaFormComponent } from './receita-form/receita-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReceitaRoutingModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
  ],
  declarations: [
    ReceitaComponent,
    ReceitaDetalheComponent,
    ReceitaFormComponent,
  ],
  providers: [ConexaoService],
})
export class ReceitaModule {}
