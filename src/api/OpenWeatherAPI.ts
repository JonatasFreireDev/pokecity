import axios from 'axios';

const OpenWeatherAPI = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
});

export default OpenWeatherAPI;
