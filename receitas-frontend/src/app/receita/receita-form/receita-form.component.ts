import { ConexaoService } from './../../conexao.service';
import { ReceitaCompleta, Ingrediente } from './../../Receita';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.css'],
})
export class ReceitaFormComponent implements OnInit, OnDestroy {
  // receita: ReceitaCompleta;
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
    this.inscricao = this._conexaoService.getDetalheReceita(this.id).subscribe(
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
    const receitaFormatada: ReceitaCompleta = {
      receita: {
        id: receita.receita.id,
        nome: receita.receita.nome,
        modoDePreparo: receita.receita.modo_de_preparo,
        dificuldade: receita.receita.dificuldade,
      },
      ingredientes: itens.map(
        (item) =>
          ({
            nome: ingrediente.nome,
            quantidade: item.quantidade,
            unidade: item.unidade,
          } as Ingrediente)
      ),
    };
    return receitaFormatada;
  }

  save() {
    this._conexaoService.saveReceitaEdit(this.receita.receita).subscribe(
      () => {
        this._router.navigate(['/receitas', this.receita.receita.id]);
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
