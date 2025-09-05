import { createContext, useReducer, useState } from 'react';

// Create a context with a default value of 0
const CartContext = createContext(0);

export default CartContext;
