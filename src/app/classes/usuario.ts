export class Usuario {
  constructor(
    public id?: string,
    public nome: string = '',
    public cpf: string = '',
    public rg: string = '',
    public telefone: string = '',
    public cep: string = '',
    public senha: string = '',

    // é opcional, porque o admin não precisa enviar essas informações
    public rua?: string,
    public bairro?: string,
    public cidade?: string,
    public estado?: string,
    public numero?: number
  ) {}
}
