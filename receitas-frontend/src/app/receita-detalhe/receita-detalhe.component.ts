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

  public id: string;
  public receita: any;
  private uri = `receitas`;

  ngOnInit(): void {
    this.conexaoService.getDetalheObjeto(this.uri, this.id).subscribe(
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
