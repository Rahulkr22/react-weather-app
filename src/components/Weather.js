import React from 'react';
import Card from './Card.js';
import WindCard from './WindCard.js';
import Navbars from './Navbars.js';

function Weather() {
  return (
    <div>
      <Navbars></Navbars>
      <section className="section1">
        <Card></Card>
      </section>
    </div>
  );
}

export default Weather;
