import { Conta } from './conta';
export class Transacao {
  constructor(
    public contaOrigem: string = '',
    public contaDestino: string = '',
    public dataTransacao: string = '',
    public descricao: string = '',
    public tipoTransacao: number = 1,
    public id?: string,
    public valor?: number,
    public conta?: Conta
  ) {}
}
