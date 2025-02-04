import { Usuario } from "./usuario";

export class NovaConta {
    constructor(
        public tipoConta: number = 1,
        public ativa: number = 0,

        public usuario?: Usuario,
    ) {}
}