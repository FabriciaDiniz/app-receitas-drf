import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceitaComponent } from './receita/receita.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { ConexaoService } from './conexao.service';

@NgModule({
  declarations: [
    AppComponent,
    ReceitaComponent,
    IngredienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ConexaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
