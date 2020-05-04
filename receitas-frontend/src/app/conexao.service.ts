import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  private apiUrl = 'http://localhost:8000/receitas';

  constructor(private httpClient: HttpClient) {
    this.getReceitas(this.apiUrl);
  }

  public getReceitas(url: string) {
    return this.httpClient.get(url).subscribe(
      value => {
        // value is the result
      },
      error => {
        console.log(error);
      }
    );
  }
}
