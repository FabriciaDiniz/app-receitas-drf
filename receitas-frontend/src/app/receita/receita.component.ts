import { ConexaoService } from './../conexao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  constructor(
    private conexaoService : ConexaoService,
  ) { }

  private apiUrl = 'http://localhost:8000/receitas';
  public receitas: any;

  ngOnInit(): void {
    this.conexaoService.getReceitas(this.apiUrl).subscribe(
      value => {
        console.log(value)
        this.receitas = value;
      },
      error => {
        console.log(error);
      }
    );
  }

}
