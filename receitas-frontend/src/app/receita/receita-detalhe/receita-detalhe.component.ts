import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ConexaoService } from '../../conexao.service';
import { Receita } from './../../Receita';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.component.html',
  styleUrls: ['./receita-detalhe.component.css']
})
export class ReceitaDetalheComponent implements OnInit {
  receita: any;

  constructor(
    private conexaoService: ConexaoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  public id: any;
  private uri = `receitas`;

  ngOnInit(): void {
    this.getReceita();
  }

  getReceita(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.conexaoService.getDetalheReceita(this.uri, this.id).subscribe(
      receita => {
        this.receita = receita;
      },
      error => {
        console.log(error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
