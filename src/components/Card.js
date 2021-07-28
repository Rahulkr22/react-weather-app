import React, { useState, useEffect } from 'react';
import './card.css';
import WindCard from './WindCard';

function Card() {
  const [city, setCity] = useState('');
  const [searchs, setSearchs] = useState('Bangalore');
  const [search, setSearch] = useState('Bangalore');
  const [currTemp, setCurrTemp] = useState('');
  const [condition, setCondition] = useState('');
  const [currTempMin, setCurrTempMin] = useState('');
  const [currTempMax, setCurrTempMax] = useState('');
  const [wind, setWind] = useState('');
  const [humadity, setHumadity] = useState('');
  const [pressure, setPressure] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  function change() {
    setSearch(searchs);
  }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e12cb0fde71f0869930d97ccee3fd10c`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.name);
      setCurrTemp((resJson.main.temp - 273.15).toFixed(2));
      setCurrTempMin((resJson.main.temp_min - 273.15).toFixed(2));
      setCurrTempMax((resJson.main.temp_max - 273.15).toFixed(2));
      setCondition(resJson.weather[0].main);
      setWind(resJson.wind.speed);
      setHumadity(resJson.main.humidity);
      setPressure(resJson.main.pressure);
      setSunrise(resJson.sys.sunrise);
      setSunset(resJson.sys.sunset);
    };
    fetchApi();
  }, [search]);

  const currDate = new Date();
  let currDay = currDate.getDay();
  let todayDate = currDate.getDate();
  let currYear = currDate.getFullYear();
  let hour = currDate.getHours();
  let minutes = currDate.getMinutes();

  let weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  const currMonth = currDate.getMonth();
  let month = new Array(12);
  month[0] = 'Jan';
  month[1] = 'Fab';
  month[2] = 'March';
  month[3] = 'Apr';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'Aug';
  month[8] = 'Sept';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';

  return (
    <>
      <div className="box">
        <div className="mb-3 inputData">
          <input
            type="search"
            placeholder="Enter City Name"
            className="inputFeild"
            onChange={(event) => {
              setSearchs(event.target.value);
            }}
          />
          <button className="btn btn-light" type="submit" onClick={change}>
            Search
          </button>
        </div>
        <div className="wave"></div>
        <div id="weathercon">
          <i className="fas fa-cloud"></i>
        </div>
        <h2>{condition}</h2>
        <div className="info">
          <h2 className="location">
            <i className="fas fa-street-view"></i>
            {search}
          </h2>
          <p id="date">
            {weekday[currDay]} | {month[currMonth]} {todayDate} | {currYear} |{' '}
            {hour}:{minutes}
          </p>
          <h1 className="temp">{currTemp}&deg;C</h1>

          <h3 className="tempmin_max">
            Min {currTempMin}&deg;C & Max {currTempMax}&deg;C
          </h3>
        </div>
        <hr />
      </div>
      <br />
      <WindCard
        speed={wind}
        humadity={humadity}
        pressure={pressure}
        sunset={sunset}
        sunrise={sunrise}
      ></WindCard>
    </>
  );
}

export default Card;
