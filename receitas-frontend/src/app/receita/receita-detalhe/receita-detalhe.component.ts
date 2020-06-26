import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ConexaoService } from '../../conexao.service';
import { Receita } from './../../Receita';

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

  editar() {
    this.router.navigate(['/receitas', this.receita.id, 'edit']);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
