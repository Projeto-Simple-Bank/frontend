import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Conta, LoginCliente } from '../classes';
import { NovaConta } from '../classes/nova-conta';

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

  public postContaAPI(conta: NovaConta): Observable<Conta> {
    return this.http.post<Conta>(`${this.baseUrl}/criar-conta`, conta);
  }

  public postLoginAPI(conta: LoginCliente): Observable<LoginCliente> {
    return this.http.post<LoginCliente>(`${this.baseUrl}/login`, conta);
  }
}
