import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Nav';

import Home from './Home';
import Tours from './Tours';
import Booking from './Booking';
import Store from './Store';

function Cont() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default Cont;