import Header from './components/Header';
import Meals from './components/Meals';
import { useState } from 'react';
import CartContext from './store/CartContext';

function App() {
  const [quantity, setQuantity] = useState(0);
  function addToCartHandler() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  return (
    <>
      <CartContext.Provider value={quantity}>
        {/* avoiding prop drilling and using context instead */}
        {/* <Header quantity={quantity} /> */}
        <Header />
        <Meals addToCartHandler={addToCartHandler} />
      </CartContext.Provider>
    </>
  );
}

export default App;
