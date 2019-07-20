import React from 'react';
import products from './products';
import Panel from './panel';
import * as API from './api';
import logo from './logo.svg';
import './App.css';

const Name = props => (
	<div style={{fontWeight: 'bold', fontSize: 20, height: 30 }}>
		{props.children}
	</div>
);

const Product = props => {
	const { name, price } = props.product;
	return (
		<div className="product">
			<Name>{name}</Name>
			<div>${price}</div>
			<button onClick={() => props.onClick(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

const CartItem = props => {
	const { name, price, quantity } = props.item;
	return (
		<div className="product">
			<Name>{name}</Name>
			<div>Units: {quantity} @ ${price}</div>
			<div>Total: ${price * quantity}</div>
			<button onClick={props.onClick}>Remove</button>
		</div>
	);
};

//const backgroundColor = 'yellow';

const App = () => {
	const cart = API.fetchCart();
	const addItem = API.getItemAdder(cart);
	const handleProductClick = (p) => {
		addItem(p);
	};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{position: 'relative'}}>
				<Panel title="Products"	style={{ left: 0 }}>
					{products.map(p => (
						<Product
							key={p.name}
							product={p}
							onClick={handleProductClick}
						/>
					))}
				</Panel>
				<Panel title="Shopping Cart" style={{right: 0}}>
					{cart.map(c => <CartItem key={c.name} item={c} />)}
				</Panel>
			</div>
    </div>
  );
}

export default App;
