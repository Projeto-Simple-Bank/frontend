export class Transacao {
  constructor(
    public id: string = '',
    public tipoTransacao: number = 1,
    public dataTransacao: string = '',
    public valor: number = 0.0,
    public descricao: string = ''
  ) {}
}
