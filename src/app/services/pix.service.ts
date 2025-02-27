import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pix } from '../classes/pix';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PixService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080/pix';

  public getChavePixAPI(chavePix: string): Observable<Pix> {
    return this.http.get<Pix>(`${this.baseUrl}/${chavePix}`);
  }

  public getListarPixAPI(idConta: string): Observable<Pix[]> {
    return this.http.get<Pix[]>(`${this.baseUrl}/listar/${idConta}`);
  }

  public postPixAPI(pix: Pix): Observable<Pix> {
    return this.http.post<Pix>(`${this.baseUrl}/cadastrar-pix`, pix);
  }
}
