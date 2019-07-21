import React, { useState } from 'react';
import products from './products';
import Panel from './panel';
import { Product, CartItem, Total } from './details';
import * as API from './api';
import logo from './logo.svg';
import './App.css';

const calcTotal = cart => {
	return cart.reduce((sum, item) => {
		const total = item.price * item.quantity;
		return sum + total;
	}, 0);
}

const App = () => {
	const cart = API.fetchCart();
	const [totalCost, setTotalCost] = useState(calcTotal(cart));
	const addItem = API.getItemAdder(cart);
	const removeItem = API.getItemRemover(cart);

	const handleProductClick = (p) => {
		addItem(p);
		setTotalCost(calcTotal(cart));
	};

	const handleCartItemClick = (c) => {
		const newCart = removeItem(c.name);
		setTotalCost(calcTotal(newCart));
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
					{cart.map(c => (
						<CartItem
							key={c.name}
							item={c}
							onClick={handleCartItemClick}
						/>
					))}
					<Total value={totalCost} />
				</Panel>
			</div>
    </div>
  );
}

export default App;
