import React from 'react';
import './card.css';

function WindCard(props) {
  return (
    <div>
      <div className="box">
        <h3>Wind Speed : {props.speed} m/s</h3>
        <hr />
        <hr />
        <h3>Humadity : {props.humadity}%</h3>
        <hr />
        <hr />
        <h3>Pressure : {props.pressure} hpa</h3>
        <hr />
        <hr />
        <h3>Sunrise : {props.sunrise}</h3>
        <hr />
        <hr />
        <h3>Sunset : {props.sunset}</h3>
        <hr />
        <hr />
      </div>
    </div>
  );
}

export default WindCard;
