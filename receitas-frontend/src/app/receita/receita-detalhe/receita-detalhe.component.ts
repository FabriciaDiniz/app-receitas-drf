import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConexaoService } from '../../conexao.service';
import { ReceitaCompleta, Ingrediente } from './../../Receita';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.component.html',
  styleUrls: ['./receita-detalhe.component.css'],
})
export class ReceitaDetalheComponent implements OnInit, OnDestroy {
  receita: ReceitaCompleta;
  inscricao: Subscription;

  constructor(
    private conexaoService: ConexaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public id: string;
  private uri: string = 'receitas';

  ngOnInit(): void {
    this.getReceita();
  }

  getReceita(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.inscricao = this.conexaoService.getDetalheReceita(this.id).subscribe(
      (receita) => {
        this.receita = this._formatarReceita(receita);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  _formatarReceita(itens) {
    const receitaFormatada: ReceitaCompleta = {
      receita: {
        id: itens[0].receita.id,
        nome: itens[0].receita.nome,
        modoDePreparo: itens[0].receita.modo_de_preparo,
        dificuldade: itens[0].receita.dificuldade,
      },
      ingredientes: itens.map((item) => {
        return {
          nome: item.ingrediente.nome,
          quantidade: item.quantidade,
          unidade: item.unidade,
        } as Ingrediente;
      }),
    };
    return receitaFormatada;
  }

  editar() {
    this.router.navigate(['/receitas', this.receita.receita.id, 'edit']);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
