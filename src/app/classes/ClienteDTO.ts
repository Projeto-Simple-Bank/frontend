export class ClienteDTO {
    constructor(
        public id?: string,
        public nome: string= '',
        public endereco: string = '',
        public tipoConta: number = 0,
        public ativa: number = 0
      ) {}
}