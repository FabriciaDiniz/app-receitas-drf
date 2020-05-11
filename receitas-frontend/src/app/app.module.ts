import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { ConexaoService } from './conexao.service';
import { ReceitaModule } from './receita/receita.module';
import { ReceitaRoutingModule } from './receita/receita.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    IngredienteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReceitaModule,
    ReceitaRoutingModule,
    AppRoutingModule,
  ],
  providers: [ConexaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
