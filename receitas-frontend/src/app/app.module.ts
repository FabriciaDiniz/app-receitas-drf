import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { ConexaoService } from './conexao.service';
import { ReceitaModule } from './receita/receita.module';
import { ReceitaRoutingModule } from './receita/receita.routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        IngredienteComponent,
        BreadcrumbComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReceitaModule,
        ReceitaRoutingModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [ConexaoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
