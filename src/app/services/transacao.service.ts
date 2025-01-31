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

  public postTransacaoAPI(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(
      `${this.baseUrl}/efetuar-pagamento`,
      transacao
    );
  }
}
