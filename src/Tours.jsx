import { useState } from 'react';
import './Tours.css'; 
import Nav from './Nav'

export default function Tours() {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <body className="tours-page">
    <Nav/>
    <div class='tos'>
      <h1 className="countdown-heading">Countdown</h1>
      <div className="countdown-container">
        <div className="timer">
          <div className="time-box"><p>2</p><span>Months</span></div>
          <div className="time-box"><p>1</p><span>Days</span></div>
          <div className="time-box"><p>8</p><span>Hours</span></div>
        </div>
        <p className="concert-info">Until Next Concert<br />Narendra Modi Stadium, Ahmedabad</p>
      </div>
    <div className = 'wtv'>
      <div className="city-selector-container">
        <label htmlFor="city">Pick your city!</label>
        <br />
        <select id="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="bengaluru">Bengaluru</option>
        </select><br />
        <button className="submit-button">Submit</button>
      </div>

      <div className="map-container">
        <iframe
          title="Ahmedabad Stadium"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2960536908495!2d72.60057131499248!3d23.04516598493661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b53b09f6cbf%3A0xfef20e362e974888!2sNarendra%20Modi%20Stadium!5e0!3m2!1sen!2sin!4v1631442493891!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      </div>
    </div>
    </body>
  );
}