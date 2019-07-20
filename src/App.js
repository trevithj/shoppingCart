import React, { useState } from 'react';
import products from './products';
import Panel from './panel';
import { Product, CartItem, Total } from './details';
import * as API from './api';
import logo from './logo.svg';
import './App.css';

const calcTotal = cart => {
	return Math.random() * 200;
}

const App = () => {
	const cart = API.fetchCart();
	const addItem = API.getItemAdder(cart);
	const handleProductClick = (p) => {
		addItem(p);
		setTotalCost(calcTotal(cart));
	};
	const [totalCost, setTotalCost] = useState(calcTotal(cart));

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
					<Total value={totalCost} />
				</Panel>
			</div>
    </div>
  );
}

export default App;
