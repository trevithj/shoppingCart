import React, { useState } from 'react';
import products from './products';
import { fetchCart, saveCart } from './api';
import logo from './logo.svg';
import './App.css';

const Product = props => {
	const { name, price } = props.product;
	return (
		<div className="product">
			<div>{name} ${price}</div>
			<button>Add to cart</button>
		</div>
	);
};

const CartItem = props => {
	const { name, price, qty } = props.item;
	return (
		<div className="product">
			<div>{name} ${price} ${qty}</div>
			<div>Total: ${price * qty}</div>
			<button>Remove</button>
		</div>
	);
};

const backgroundColor = 'yellow';

const Panel = props => (
	<div
		className="App-panel"
		style={props.style}>
			<h3>{props.title}</h3>
			{props.children}
	</div>
);
Panel.defaultProps = {
	title: 'The Panel',
	style: {},
};


const App = () => {
	const [cart, setCart] = useState(fetchCart());
  return (
    <div className="xApp">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Panel title="Products"	style={{ backgroundColor: '#ddd'}}>
					{products.map(p => <Product key={p.name} product={p} />)}
      </Panel>
      <Panel title="Shopping Cart">
					{cart.map(c => <CartItem key={c.name} item={c} />)}
      </Panel>

    </div>
  );
}

export default App;
