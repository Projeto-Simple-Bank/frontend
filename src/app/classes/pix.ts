import { Conta } from './conta';

export class Pix {
  constructor(
    public chavePix: string = '',
    // tem que ver um jeito de enviar a conta
    public conta?: Conta | any
  ) {}
}
