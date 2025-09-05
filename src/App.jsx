import Header from './components/Header';
import Meals from './components/Meals';
import { useState } from 'react';
import { CartContextProvider } from './store/CartContext';

function App() {
  const [quantity, setQuantity] = useState(0);
  function addToCartHandler() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  return (
    <CartContextProvider>
      <Header />
      <Meals addToCartHandler={addToCartHandler} />
    </CartContextProvider>
  );
}

export default App;
