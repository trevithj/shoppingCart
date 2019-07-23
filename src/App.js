import React, { useContext } from 'react';
import Panel from './panel';
import { Product, CartItem, Total } from './details';
import { StoreContext } from './store';
import logo from './logo.svg';
import './App.css';

const App = () => {
	const { state, addItem, removeItem } = useContext(StoreContext);
	const { products, cart, totalCost } = state;
	const handleProductClick = (p) => addItem(cart, p);
	const handleCartItemClick = (c) => removeItem(cart, c.name);

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
