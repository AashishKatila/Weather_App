import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';  
import { Dimmer, Loader } from 'semantic-ui-react';

export default function App() {
  
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
     setLat(position.coords.latitude);
     setLong(position.coords.longitude);
   })
   
    if(lat && long){
    await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => { 
      setData(result);
      setDataCheck(result.weather[0]);
      setmain(result.main);
      setsys(result.sys);
      // console.log(lat);
      // console.log(long);  
      console.log(result)
    });
  }
  }

  useEffect( () => {
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      {(typeof data.main != 'undefined')?(
        <Weather weatherData={data}/>
      ):(
        <div>
          <Dimmer Active>
            <Loader>Loading...</Loader>
          </Dimmer>
          </div>
      )}
      
    </div>
  );
}