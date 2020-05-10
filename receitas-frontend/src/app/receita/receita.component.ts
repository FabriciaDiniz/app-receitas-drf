import { Component, OnInit } from '@angular/core';

import { ConexaoService } from './../conexao.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  constructor(
    private conexaoService : ConexaoService,
  ) {}

  private uri = 'receitas';
  public receitas: any;

  ngOnInit(): void {
    this.conexaoService.getObjetos(this.uri).subscribe(
      value => {
        this.receitas = value;
      },
      error => {
        console.log(error);
      }
    );
  }
}
