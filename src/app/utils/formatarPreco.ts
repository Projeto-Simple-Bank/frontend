export function formatarPreco(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(valor);
}
