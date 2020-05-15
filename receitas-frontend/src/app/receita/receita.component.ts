import { Component, OnInit } from '@angular/core';

import { ConexaoService } from './../conexao.service';
import { Receita } from './../Receita';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {
  receitas: Receita[];

  constructor(
    private conexaoService: ConexaoService,
  ) { }

  private uri = 'receitas';

  ngOnInit(): void {
    this.getReceitas();
  }

  getReceitas(): void {
    this.conexaoService.getObjetos(this.uri).subscribe(
      receitas => {
        this.receitas = receitas;
      },
      error => {
        console.log(error);
      }
    );
  }
}
