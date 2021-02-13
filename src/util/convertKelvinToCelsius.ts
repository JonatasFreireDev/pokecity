/* converte de Kelvin para celcius*/
export default function convertKelvinToCelcius(kelvinTemp: number): number {
  return parseFloat((kelvinTemp - 273.15).toFixed(2));
}
