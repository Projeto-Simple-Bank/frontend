export class Boleto {
  constructor(
    public codigo: string = '',
    public contaId: string = '',
    public beneficiario: string = '',
    public dataTransacao: string = '',
    public dataVencimento: string = '',
    public statusBoleto: boolean = true,
    public valor: number = 0,
    public transacaoId: string = ''
  ) {}
}
