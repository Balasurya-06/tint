import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import ShopNow from './Pages/Shopnow';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopnow" element={<ShopNow />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        {/* ...other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
