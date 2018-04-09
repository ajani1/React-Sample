import axios from 'axios';

const API_KEY = "64a6aad03e4107e52d50a1ca632411fa";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?";

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}q=${city},us&APPID=${API_KEY}`;
    const request = axios.get(url);

    console.log('Request is => ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}