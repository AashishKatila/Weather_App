import React from 'react';
import '../index.css';
import { Button } from 'semantic-ui-react'
import moment from 'moment'

const refresh = () =>{
  window.location.reload()
}

const Weather = ({weatherData}) => {
  
  // console.log(weatherData)
  return(
  
    weatherData ? <div className="main">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color="blue" circular icon="refresh" onClick={refresh} ></Button>
      </div> 
        <div className="flex">
          <p className="day">{moment().format('dddd')},
          <span>{moment().format('LL')}</span></p>
          <p className='description'>{weatherData.description}</ p> 
        </div>

        <div className="flex">
          <p className="temperature">Temperature : {weatherData.main.temp} &deg;C</p>
          <p className="temperature">Humidity : {weatherData.main.humidity} %</p> 
        </div>

        <div className="flex">
        <p className="rise-set">SunRise : {new Date(weatherData.sys.sunrise*1000).toLocaleTimeString('en-IN')}</p>
        <p className="rise-set">SunSet : {new Date(weatherData.sys.sunset*1000).toLocaleTimeString('en-IN')}</p>  
        </div>

  </div>:<></>
)}

export default Weather;