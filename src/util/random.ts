/*
Gera um numero aleatório ate o numero maximo informado
*/
export default function random(maxValue: number): number {
  const max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - 1)) + 1;
}
