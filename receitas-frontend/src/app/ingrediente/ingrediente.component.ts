import { Component, OnInit } from '@angular/core';

import { ConexaoService } from './../conexao.service';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css'],
})
export class IngredienteComponent implements OnInit {
  constructor(private conexaoService: ConexaoService) {}

  private uri = 'ingredientes';
  public ingredientes: any;

  ngOnInit(): void {
    // this.conexaoService.getObjetos(this.uri).subscribe(
    //   value => {
    //     console.log(value)
    //     this.ingredientes = value;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
}
