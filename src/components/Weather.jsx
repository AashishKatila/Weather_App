import React from 'react';
import '../index.css';
// import { Card } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import moment from 'moment'

const refresh = () =>{
  window.location.reload()
}

const CardExampleCard = ({weatherData, dats, ...props}) => (
  
    <div className="main">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color="blue" circular icon="refresh" onClick={refresh} ></Button>
      </div> 
        <div className="flex">
          <p className="day">{moment().format('dddd')},
          <span>{moment().format('LL')}</span></p>
          <p className='description'>{dats.description}</ p> 
        </div>

        <div className="flex">
          <p className="temperature">Temperature : {props.main.temp} &deg;C</p>
          <p className="temperature">Humidity : {props.main.humidity} %</p> 
        </div>

        <div className="flex">
        <p className="rise-set">SunRise : {new Date(props.sys.sunrise*1000).toLocaleTimeString('en-IN')}</p>
        <p className="rise-set">SunSet : {new Date(props.sys.sunset*1000).toLocaleTimeString('en-IN')}</p>  
        </div>

  </div>
)

export default CardExampleCard;