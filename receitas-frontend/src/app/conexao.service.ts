import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  private readonly url = 'http://localhost:8000/';

  constructor(private httpClient: HttpClient) {}

  public getObjetos(uri: string): Observable<any>{
    return this.httpClient.get(`${this.url}/${uri}`);
  }

  public getDetalheobjeto(uri: string) {
    return this.httpClient.get(`${this.url}/${uri}`);
  }
}
