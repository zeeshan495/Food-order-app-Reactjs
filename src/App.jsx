import Header from './components/Header';
import Meals from './components/Meals';
import { useState } from 'react';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';
import Cart from './components/Cart';

function App() {
  const [quantity, setQuantity] = useState(0);
  function addToCartHandler() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals addToCartHandler={addToCartHandler} />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
