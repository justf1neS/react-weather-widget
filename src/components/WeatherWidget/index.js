import React, {useEffect, useMemo, useState} from "react";
import SliderComponent from "../SliderComponent";
import {MAX_TEMP, METRIC_TEMP, MIN_TEMP} from "../../constants";
import WeatherService from "../../services/weather.service"
import LoaderComponent from "../LoaderComponent";

const WeatherWidget = ({latitude, longitude}) => {
    const [weatherTemp, setWeatherTemp] = useState(0);
    const [icon, setIcon] = useState('/loading.gif');
    const [color, setColor] = useState('');
    const [isWeatherFlag, setWeatherFlag] = useState(false);
    ;

    useEffect(() => {
        if (latitude && longitude) {
            WeatherService.getWeather({
                lat: latitude,
                lon: longitude
            })
                .then((res) => {
                    console.log(res);
                    setWeatherTemp(Number.parseInt(res.data.main.temp));
                    setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
                    setWeatherFlag(true);
                })
                .catch((e) => {
                    alert(e.message)
                })
        }
    }, [latitude, longitude])

    useEffect(() => {
        if (isWeatherFlag) {
            if (weatherTemp <= -10) {
                setColor('#00ffff');
            }
            if (weatherTemp > -10 && weatherTemp <= 30) {
                setColor('#fff700')
            }
            if (weatherTemp >= 30) {
                setColor('#ff8c00')
            }
        }
    }, [weatherTemp, isWeatherFlag])

    const main = useMemo(() => (
        <>

            <div style={{background: `${color}`}}>
                <img className="weatherIcon" src={icon}/>
                <p style={{color: `black`}}>{weatherTemp}{METRIC_TEMP}</p>
            </div>
            <div className="sliderDiv">
                <SliderComponent
                    min={MIN_TEMP}
                    max={MAX_TEMP}
                    metric={METRIC_TEMP}
                    value={weatherTemp}
                    disabled={!isWeatherFlag}
                    onChange={(e) => {
                        setWeatherTemp(e.target.value)
                    }}
                />
            </div>
        </>
    ), [color, icon, weatherTemp, isWeatherFlag, setWeatherFlag])

    const loader = useMemo(() => (
        <LoaderComponent/>
    ), [])


    return (<>{isWeatherFlag ? main : loader}</>)
}

export default WeatherWidget
