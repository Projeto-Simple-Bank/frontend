import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Conta, LoginCliente } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080/contas';

  // método para listar a conta pelo o número dela
  public getNumeroContaAPI(numeroConta: string): Observable<Conta> {
    return this.http.get<Conta>(`${this.baseUrl}/numero-conta/${numeroConta}`);
  }

  // método para retornar o cliente pelo o id
  public getClienteAPI(id: string): Observable<Conta> {
    return this.http.get<Conta>(`${this.baseUrl}/${id}`);
  }

  public postLoginAPI(conta: LoginCliente): Observable<LoginCliente> {
    return this.http.post<LoginCliente>(`${this.baseUrl}/login`, conta);
  }
}
