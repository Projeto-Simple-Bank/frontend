import { Usuario } from './usuario';

export class Conta {
  constructor(
    public id: string = '',
    public ativa: number = 0,
    public tipoConta: number = 1,
    public agencia: number = 0,
    public saldo: number = 0.0,
    public conta: string= '',
    public senha: string = '',

    
    public usuario?: Usuario,
  ) {}
  get statusAtivo(): boolean {
    return this.ativa === 0;
  }
  get sTipoConta(): boolean {
    return this.tipoConta === 1;
  }
}
