import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../classes/admin';


@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080/contas';

  // método para listar todos os clientes
  public getContasAPI(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.baseUrl}/lista`);
  }

  // método para retornar o cliente pelo o id
  public getClienteAPI(id: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/${id}`);
  }

  public postAdminAPI(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.baseUrl}/criar-admin`, admin);
  }

  // método POST para login
  public postLoginAdminAPI(dadosLogin: { conta: string, senha: string }): Observable<Admin> {
    return this.http.post<Admin>(`${this.baseUrl}/login`, dadosLogin);
  }
}
