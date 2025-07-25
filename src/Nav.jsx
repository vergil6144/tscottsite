import { Link } from 'react-router-dom';

export default function Nav(){
    return(
            <nav>
          <img src="../public/l.png" alt="" />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/store">Store</Link></li>
        </nav>
    )
}