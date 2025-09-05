import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant"></img>
        <h1>Food Order App in React</h1>
      </div>
      <nav>
        {/* <Button textOnly={true}>Cart ({quantity})</Button> */}
        <Button textOnly={true}>Cart ({cartCtx.items.length})</Button>
      </nav>
    </header>
  );
}
