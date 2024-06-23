import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import Delivery from './Pages/Delivery';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;