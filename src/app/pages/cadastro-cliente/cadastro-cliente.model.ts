import { z } from 'zod';

// Ajustar a validação
export const dadosPessoaisSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  cpf: z.string().regex(/^\d{11}$/, 'CPF deve ter 11 dígitos'),
  rg: z.string().min(5, 'RG inválido'),
  telefone: z.string().regex(/^\d{11}$/, 'Telefone deve ter 11 dígitos'), // confirmar isso aqui
});

export const enderecoSchema = z.object({
  cep: z.string().regex(/^\d{8}$/, 'CEP deve ter 8 dígitos'),
  rua: z.string().min(3, 'Rua inválida'),
  numero: z.number().min(1, 'Número inválido'),
  bairro: z.string().min(3, 'Bairro inválido'),
  cidade: z.string().min(3, 'Cidade inválida'),
  estado: z.string().min(2, 'Estado inválido'),
});

export type DadosPessoais = z.infer<typeof dadosPessoaisSchema>;
export type Endereco = z.infer<typeof enderecoSchema>;
