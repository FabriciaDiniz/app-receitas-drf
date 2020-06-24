import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConexaoService } from '../../conexao.service';
import { Receita, Ingrediente } from './../../Receita';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.component.html',
  styleUrls: ['./receita-detalhe.component.css'],
})
export class ReceitaDetalheComponent implements OnInit, OnDestroy {
  receita: Receita;
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
    this.inscricao = this.conexaoService.getReceita(this.id).subscribe(
      (receita) => {
        this.receita = receita;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  _formatarReceita(receita) {
    const receitaFormatada: Receita = {
      id: receita.id,
      nome: receita.nome,
      categoria: receita.categoria,
      dificuldade: receita.dificuldade,
      ingredientes: receita.ingredientes.forEach((item) => {
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

  editar() {
    this.router.navigate(['/receitas', this.receita.id, 'edit']);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
