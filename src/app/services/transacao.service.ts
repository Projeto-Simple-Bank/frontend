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

  // método para listar todos as transacoes associada a um usuário específico
  public getTransacaoDaContaAPI(idConta: string): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.baseUrl}/listar/${idConta}`);
  }

  public getTransacaoIdAPI(idTransacao: string): Observable<Transacao> {
    return this.http.get<Transacao>(`${this.baseUrl}/${idTransacao}`);
  }

  // método de pagamento pix e ted
  public postTransacaoAPI(transacao: Transacao): Observable<string> {
    return this.http.post(`${this.baseUrl}/efetuar-pagamento`, transacao, {
      responseType: 'text',
    });
  }
}
