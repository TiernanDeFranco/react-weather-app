import React, { useState } from 'react'
import './WeatherApp.css'

import searchIcon from '../Assets/search.png';
import sunIcon from '../Assets/sunny.png';
import partlyCloudyIcon from '../Assets/partly-cloudy.png';
import cloudyIcon from '../Assets/cloudy.png';
import rainIcon from '../Assets/Rain.png';
import stormIcon from '../Assets/storm.png';
import snowIcon from '../Assets/snow.png';
import windIcon from '../Assets/windy.png';
import humidIcon from '../Assets/humidity.png';
import TempRangeBar from './TempRangeBar';

const WeatherApp = () => {

    let apiKey = "cacfcbf74088bf7b1160aaa0ff9b1829";

    const [wIcon, setWIcon] = useState(partlyCloudyIcon);

    const[minTemp, setMinTemp] = useState(null);
    const [maxTemp, setMaxTemp] = useState(null);
    const [temp, setTemp] = useState(null);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value == "")
        {
            return 0;
        }


        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Imperial&appid=${apiKey}`;

        let response = await fetch(url);
        if (!response.ok) 
        {
            return 0;
        }

        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const windSpeed = document.getElementsByClassName("wind-speed");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        
       

        if (data.weather[0].icon ==="01d")
        {
            setWIcon(sunIcon);
        }
        else if (data.weather[0].icon ==="01n")
        {
            setWIcon(sunIcon);
        }
        else if (data.weather[0].icon ==="02d")
        {
            setWIcon(partlyCloudyIcon);
        }
        else if (data.weather[0].icon ==="02n")
        {
            setWIcon(partlyCloudyIcon);
        }
        else if (data.weather[0].icon ==="03d")
        {
            setWIcon(cloudyIcon);
        }
        else if (data.weather[0].icon ==="03n")
        {
            setWIcon(cloudyIcon);
        }
        else if (data.weather[0].icon ==="09d")
        {
            setWIcon(rainIcon);
        }
        else if (data.weather[0].icon ==="09n")
        {
            setWIcon(rainIcon);
        }
        else if (data.weather[0].icon ==="011d")
        {
            setWIcon(stormIcon);
        }
        else if (data.weather[0].icon ==="011n")
        {
            setWIcon(stormIcon);
        }
        else if (data.weather[0].icon ==="013d")
        {
            setWIcon(snowIcon);
        }
        else if (data.weather[0].icon ==="013n")
        {
            setWIcon(snowIcon);
        }
        else
        {
            setWIcon(cloudyIcon);
        }

        humidity[0].innerHTML = data.main.humidity+"%";
        windSpeed[0].innerHTML = Math.floor(data.wind.speed)+" mph";
        temperature[0].innerHTML = Math.floor(data.main.temp)+" °F";
        location[0].innerHTML = data.name;

        setMinTemp(Math.floor(data.main.temp_min));
        setMaxTemp(Math.floor(data.main.temp_max));
        setTemp(Math.floor(data.main.temp));
    }   

    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='City Search'/>
                    <div className='search-icon' onClick={()=>{search()}}>
                        <img src={searchIcon} alt="Search Icon" width={25} height={25}/>
                    </div>
                </div>
                <div className="weather-image">
                    <img src={wIcon} alt="" width={350} height={350}/>
                    <div className="weather-temp"></div>
                    <div className="weather-location"></div>

                   <TempRangeBar className="temprange" value={temp} start={minTemp} end={maxTemp}/>

                    <div className="data-container">
                        <div className='element'>
                            <img src={humidIcon} alt='' className='icon' width={50} height={50}/>
                            <div className="data">
                                <div className="humidity-percent">0%</div>
                                <div className="text">Humidity</div>
                            </div>
                        </div>
                        <div className='element'>
                            <img src={windIcon} alt='' className='icon' width={50} height={50}/>
                            <div className="data">
                                <div className="wind-speed">0 mph</div>
                                <div className="text">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}

export default WeatherApp;