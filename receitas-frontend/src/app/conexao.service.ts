import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { merge, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  private readonly url = 'http://localhost:8000/';

  constructor(private readonly httpClient: HttpClient) {}

  public getObjetos(uri: string): Observable<any>{
    return this.httpClient.get(`${this.url}${uri}`).pipe(tap(console.log));
  }

  public getDetalheObjeto(uri: string, id: string): Observable<any> {
    const receita = this.httpClient.get(`${this.url}/${uri}/${id}`);
    const detalhes = this.httpClient.get(`${this.url}/receita-ingredientes/${id}`);
    
    return receita.pipe(merge(detalhes), tap(console.log));
  }
}
