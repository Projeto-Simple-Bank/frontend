import { Conta } from './conta';
export class Transacao {
  constructor(
    public contaOrigem: string = '',
    public contaDestino: string = '',
    public dataTrasacao: string = '30/01/2025', // quero gerar automaticamente no backend
    public descricao: string = '',
    public tipoTransacao: number = 1,
    public valor: number = 0,
    public conta?: Conta
  ) {}
}
