import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bangalore",
        feelslike: 24.84,
        temp: 26.32,
        tempMin: 25.0,
        tempMax: 27.78,
        humidity: 49,
        weather: "scattered clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: 'center'}}>
            <b><h1>Weather App</h1></b>
            <br></br>
            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}