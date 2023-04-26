
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=f5b7fc48cd76d3109ca63044c1538e07

import React, { useEffect, useState } from 'react'
import "./style.css";
import WeatherCard from './weatherCard';

const Temp = () => {
     
    const [searchValue, setSearchValue] = useState("Ghaziabad");
    const [tempInfo, setTempInfo] = useState({})

     const  getWeatherInfo  = async () => {
        try{
            let url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f5b7fc48cd76d3109ca63044c1538e07`;

           let res = await fetch(url);
           let data = await res.json();

           const {temp , humidity, pressure} = data.main;
           const {main:weathermood } =data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country , sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };
            setTempInfo(myNewWeatherInfo);
        //    console.log(temp);
        } catch (error) {
             console.log(error);
        }
    };   

     useEffect(() => {
         getWeatherInfo();                                         
     } , )

    
  return (
    <>
       <div className='wrap'>
        <div className='search'>
            <input type="search"
             placeholder='search...'
             autoFocus
             id='search'
             className='searchTerm' 
             value={searchValue}
             onChange={(e) => setSearchValue(e.target.value)}
                />
                <button 
                className='searchButton' 
                type="button"
                onClick={getWeatherInfo}>
                search</button>
        </div>
       </div>

      <WeatherCard tempInfo = {tempInfo}/>
      
    </>
  )
}

export default Temp;
