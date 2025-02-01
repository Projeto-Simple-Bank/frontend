import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Transacao } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080/transacoes';

  // método para listar todos as transacoes
  public getTransacoesAPI(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.baseUrl}/lista`);
  }
}
