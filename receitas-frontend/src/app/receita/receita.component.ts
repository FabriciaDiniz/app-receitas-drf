import { Component, OnInit } from '@angular/core';

import { ConexaoService } from './../conexao.service';
import { Receita } from './../Receita';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css'],
})
export class ReceitaComponent implements OnInit {
  unfilteredReceitas: Receita[];
  filteredReceitas: Receita[];

  constructor(private conexaoService: ConexaoService) {}

  private uri = 'receitas';

  ngOnInit(): void {
    this.getReceitas();
  }

  getReceitas(): void {
    this.conexaoService.getReceitas(this.uri).subscribe(
      (receitas) => {
        this.unfilteredReceitas = receitas;
        this.filteredReceitas = receitas;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  atualizaLista(filter: string) {
    if (filter) {
      this.filteredReceitas = this.unfilteredReceitas.filter((receita) => {
        return receita.ingredientes.some((ingrediente) => {
          return ingrediente.nome.toLowerCase().includes(filter.toLowerCase());
        });
      });
    } else {
      this.filteredReceitas = this.unfilteredReceitas;
    }
  }
}
