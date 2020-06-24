import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../environments/environment';
import { Receita } from './Receita';

@Injectable({
  providedIn: 'root',
})
export class ConexaoService {
  constructor(private readonly httpClient: HttpClient) {}

  public getReceitas(uri: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}${uri}`);
  }

  public getReceita(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}receitas/${id}`);
  }

  public saveReceitaEdit(receita: Receita) {
    // TODO: adicionar as outras requests
    return this.httpClient.patch(
      `${environment.apiUrl}receitas/${receita.id}`,
      receita
    );
  }
}
