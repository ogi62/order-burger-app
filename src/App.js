import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Error from './components/Error';
import { useState } from 'react';
import CartProvider from './store/CartProvider';



function App() {

  const [cartIsShown,setCartIsShown] = useState(false)

  const showCart = ()=> {
    setCartIsShown(true)
  }

  const hideCart = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <Header showCart={showCart} />
        {cartIsShown && <Modal onClose={hideCart} />}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Menu" element={<Menu />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  
    </CartProvider>

  )
    
}

export default App;
