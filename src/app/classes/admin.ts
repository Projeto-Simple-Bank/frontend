import { Usuario } from './usuario';

export class Admin {
  constructor(
    public id: string = '',
    public email: string= '',
    public senha: string = '',
    public status: boolean= true,

    public usuario?: Usuario,
  ) {}
}
