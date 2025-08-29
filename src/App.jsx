import Header from './components/Header';
import Meals from './components/Meals';
import { useState } from 'react';

function App() {
  const [quantity, setQuantity] = useState(0);
  function addToCartHandler() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  return (
    <>
      <Header quantity={quantity} />
      <Meals addToCartHandler={addToCartHandler} />
    </>
  );
}

export default App;
