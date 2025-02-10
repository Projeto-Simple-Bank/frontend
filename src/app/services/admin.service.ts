import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Admin } from '../classes/admin';
import { Conta, Usuario } from '../classes';
import { ClienteDTO } from '../classes/clienteDTO';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080/administradores';

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
  public postLoginAdminAPI(dadosLogin: {
    email: string;
    senha: string;
  }): Observable<Admin> {
    return this.http.post<Admin>(`${this.baseUrl}/login`, dadosLogin);
  }

  public listarUsuariosSemConta(): Observable<Usuario[]> {
    return forkJoin({
      contas: this.http.get<Conta[]>('http://localhost:8080/contas/lista'),
      usuarios: this.http.get<Usuario[]>(
        'http://localhost:8080/usuarios/lista'
      ),
    }).pipe(
      map(({ contas, usuarios }) => {
        const usuariosComConta = new Set(
          contas.map((conta) => conta.usuario?.id)
        );
        return usuarios.filter((usuario) => !usuariosComConta.has(usuario.id));
      })
    );
  }

  public putAlterarClienteAPI(clienteDTO: ClienteDTO): Observable<string> {
    return this.http.put(`${this.baseUrl}/editar-cliente`, clienteDTO, {
      responseType: 'text',
    });
  }
}
