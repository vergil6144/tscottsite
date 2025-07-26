import './Store.css';
import Nav from './Nav';
import album1 from '../public/alb1.png'; 
import album2 from '../public/alb2.png';
import album3 from '../public/alb3.png';
import album4 from '../public/alb4.png';
import hoodie1 from '../public/hoodie1.png';
import hoodie2 from '../public/hoodie2.png';
import figurine from '../public/figurine.png';
import song1 from '../public/song1.jpg';
import song2 from '../public/song2.jpg';
// Add other necessary imports

export default function Store() {
  const albums = [
    { title: "Days Before Rodeo", img: album4 },
    { title: "Rodeo", img: album1 },
    { title: "Astro World", img: album2 },
    { title: "Jackboys 2", img: album3 },
  ];
  const merch = [
    { title: "Cactus Jack Hoodie", img: hoodie1 },
    { title: "FE!N Hoodie", img: hoodie2 },
    {title: 'Limited Edition Figure',img:figurine}
  ];

  const streams = [
    { title: "FE!N (feat. Playboi Carti)", count: "1,363,138,775", img: song1 },
    { title: "goosebumps", count: "2,886,849,223", img: song2 },
    { title: "CHAMPAIN & VACAY", count: "18,958,715", img: album2 },
    { title: "KICK OUT", count: "19,047,931", img: album2 },
    { title: "Type Shit", count: "594,926,822", img: album3 },
    { title: "Highest In The Room", count: "2,061,901,695", img: album4 },
  ];

  return (
    <div className="store-page">
      <Nav />
      <div className='helpme'>
      <h1 className="store-title">Store</h1>

      <section className="albums-section">
        <h2>Signed Albums</h2>
        <div className="albums-list">
          {albums.map((album, i) => (
            <div className="album-card" key={i}>
              <img src={album.img} alt={album.title} />
              <p>{album.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="merch-section">
        <h2>Merch</h2>
        <div className="merch-list">

          {merch.map((item, i) => (
            <>
            <div className="merch-item" key={i}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
            </>
            
          ))}
        </div>
      </section>

      <section className="stream-section">
        <h2>Stream</h2>
        <div className="stream-list">
          {streams.map((track, i) => (
            <div className="track" key={i}>
              <img src={track.img} alt={track.title} />
              <div className="track-details">
                <p className="track-title">{track.title}</p>
                <p className="track-count">{track.count}</p>
              </div>
              <button className="play-button">►</button>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
