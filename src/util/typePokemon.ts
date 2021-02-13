/*
recebe a temperatura em celcius e retorna um tipo de poquemon referente
a sua temperatura.
*/
export default function typePokemon(
  celciusTemp: number,
  weather: string
): string {
  if (weather === 'Rain') return 'electric';

  if (celciusTemp < 5) return 'ice';

  if (celciusTemp >= 5 && celciusTemp < 10) return 'water';

  if (celciusTemp >= 12 && celciusTemp < 15) return 'grass';

  if (celciusTemp >= 15 && celciusTemp < 21) return 'ground';

  if (celciusTemp >= 23 && celciusTemp < 27) return 'bug';

  if (celciusTemp >= 27 && celciusTemp <= 33) return 'rock';

  if (celciusTemp === 33) return 'fire';

  return 'normal';
}
