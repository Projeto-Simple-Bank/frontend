import { Usuario } from './usuario';

export class Conta {
  constructor(
    public id: string = '',
    public tipoConta: number = 1,
    public agencia: number = 0,
    public saldo: number = 0.0,
    public conta: string= '',
    public senha: string = '',

    public usuario?: Usuario
  ) {}
}
