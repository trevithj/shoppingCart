import React, { createContext, useReducer } from 'react';
import products from './products';
import * as API from './api';

export const StoreContext = createContext({});

const calcTotal = cart => {
	return cart.reduce((sum, item) => {
		const total = item.price * item.quantity;
		return sum + total;
	}, 0);
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_CART': return {
      ...state,
      cart: action.payload,
      totalCost: calcTotal(action.payload),
    };
    default: return state;
  }
}

const cart = API.fetchCart();
const initialState = { products, cart, totalCost: calcTotal(cart) };

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addItem = API.getItemAdder(dispatch);
	const removeItem = API.getItemRemover(dispatch);
	
  return (
    <StoreContext.Provider value={{ dispatch, state, addItem, removeItem}}>
      {props.children}
    </StoreContext.Provider>
  )
};
