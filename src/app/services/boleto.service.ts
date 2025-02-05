import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Boleto } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class BoletoService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080/boletos';

  public getBoletoAPI(codigoBoleto: string): Observable<Boleto> {
    return this.http.get<Boleto>(`${this.baseUrl}/${codigoBoleto}`);
  }

  public postBoletoAPI(boleto: Boleto): Observable<string> {
    return this.http.post(`${this.baseUrl}/pagar`, boleto, {
      responseType: 'text',
    });
  }
}
