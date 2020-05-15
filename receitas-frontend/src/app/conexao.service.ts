import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  constructor(private readonly httpClient: HttpClient) { }

  public getObjetos(uri: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}${uri}`);
  }

  public getDetalheReceita(uri: string, id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}receita-ingredientes/${id}`);
  }
}
