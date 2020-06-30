import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ConexaoService } from './../../conexao.service';
import { Receita, Ingrediente } from './../../Receita';

@Component({
  selector: 'app-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.css'],
})
export class ReceitaFormComponent implements OnInit, OnDestroy {
  // receita: Receita;
  receita: any = {};
  inscricao: Subscription;
  dificuldades = ['muito fácil', 'fácil', 'médio', 'difícil', 'muito difícil'];
  categorias = ['Geral', 'Sobremesas', 'Salgados', 'Bolos', 'Acompanhamentos'];
  selectedCategory: any;
  selectedDificulty: any;

  constructor(
    private _conexaoService: ConexaoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  public id: string;
  private uri: string = 'receitas';

  ngOnInit(): void {
    this.getReceita();
  }

  getReceita(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.inscricao = this._conexaoService.getReceita(this.id).subscribe(
      (receita) => {
        this.receita = receita;
        this.selectedCategory = receita.categoria;
        this.selectedDificulty = receita.dificuldade;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  save() {
    this._conexaoService.saveReceitaEdit(this.receita).subscribe(
      () => {
        this._router.navigate(['/receitas', this.receita.id]);
      },
      (error) => {
        console.log('erro:', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
