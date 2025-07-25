import './Booking.css';
import streamBanner from '../public/stbn.png'; 
import Nav from './Nav'

export default function Booking() {
  const shows = [
    { city: 'Delhi', venue: 'Jawaharlal Nehru Stadium' },
    { city: 'Mumbai', venue: 'Wankhede Stadium' },
    { city: 'Bengaluru', venue: 'Kanteerava Stadium' },
  ];

  return (
    <body>
    <Nav/>
    <div className="booking-page">
      <div className="stream-section">
        <img src={streamBanner} alt="Stream Travis Scott" className="stream-banner" />
      </div>

      <div className="shows-section">
        <h2 className="section-title">Upcoming shows</h2>
        {shows.map((show, index) => (
          <div key={index} className="show-card">
            <div className="show-details">
              <h3>{show.city}</h3>
              <p>{show.venue}</p>
            </div>
            <button className="book-button">Book now</button>
          </div>
        ))}
      </div>
    </div>
    </body>
  );
}
