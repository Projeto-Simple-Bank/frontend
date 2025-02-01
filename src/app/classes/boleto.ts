export class Boleto {
  constructor(
    public codigo: string = '',
    public contaId: string = '',
    public beneficiario: string = '',
    public dataTrasacao: string = '31/01/2025', // quero gerar automaticamente no backend
    public dataVencimento: string = '',
    public statusBoleto: boolean = true,
    public valor: number = 0
  ) {}
}
