import axios from "axios";
import {API_KEY, API_URL} from "../constants";

class WeatherService {

    getWeather(params) {
        return axios.get(API_URL, {
            params: {
                appid: API_KEY,
                units: 'metric',
                ...params
            }
        })
    }
}

export default new WeatherService();
