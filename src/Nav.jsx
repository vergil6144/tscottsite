import { Link } from 'react-router-dom';

export default function Nav(){
    return(
            <nav>
          <img src="/l.png" alt="" />
            <li className = 'one'><Link to="/">Home</Link></li>
            <li className = 'two'><Link to="/tours">Tours</Link></li>
            <li className = 'three'><Link to="/booking">Booking</Link></li>
            <li className ='four'><Link to="/store">Store</Link></li>
        </nav>
    )
}