import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Conta } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080/contas';

  // método para listar todos os clientes
  public getContasAPI(): Observable<Conta[]> {
    return this.http.get<Conta[]>(`${this.baseUrl}/lista`);
  }

  // método para retornar o cliente pelo o id
  public getClienteAPI(id: string): Observable<Conta> {
    return this.http.get<Conta>(`${this.baseUrl}/${id}`);
  }
}
