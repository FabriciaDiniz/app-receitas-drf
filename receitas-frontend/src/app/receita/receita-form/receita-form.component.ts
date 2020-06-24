import { ConexaoService } from './../../conexao.service';
import { Receita, Ingrediente } from './../../Receita';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
  selectedValue: any;

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
        this.receita = this._formatarReceita(receita);
        if (this.receita == null) {
          this.receita = {};
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  _formatarReceita(itens) {
    // desestruturando
    const { receita, ingrediente } = itens;
    const receitaFormatada: Receita = {
      id: itens[0].receita.id,
      nome: itens[0].receita.nome,
      categoria: itens[0].receita.categoria,
      dificuldade: itens[0].receita.dificuldade,
      ingredientes: itens.map((item) => {
        return {
          nome: item.ingrediente.nome,
          quantidade: item.quantidade,
          unidade: item.unidade,
        } as Ingrediente;
      }),
      passos: [],
    };
    return receitaFormatada;
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
