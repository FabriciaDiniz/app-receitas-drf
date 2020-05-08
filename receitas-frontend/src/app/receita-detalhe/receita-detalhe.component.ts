import { Component, OnInit } from '@angular/core';

import { ConexaoService } from './../conexao.service';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.component.html',
  styleUrls: ['./receita-detalhe.component.css']
})
export class ReceitaDetalheComponent implements OnInit {

  constructor(
    private conexaoService : ConexaoService,
  ) {}

  private id: string;
  private receita: string;
  private uri = `receitas/${this.id}`;

  ngOnInit(): void {
    this.conexaoService.getObjetos(this.uri).subscribe(
      value => {
        console.log(value)
        this.receita = value;
      },
      error => {
        console.log(error);
      }
    );
  }

}
