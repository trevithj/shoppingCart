export const fetchCart = () => {
	try {
		const sCart = localStorage.getItem('cart');
		const cart = sCart ? JSON.parse(sCart) : [];
		return cart;
	} catch (err) {
		console.error(err);
		return [];
	};
};

export const saveCart = cart => {
	localStorage.setItem('cart', JSON.stringify(cart));
}

//format for product: {name, price}
//format for cart item: {name, price, quantity}
export const getItemAdder = dispatch => (cart, product) => {
	const index = cart.map(item => item.name).indexOf(product.name);
	if( index === -1 ) {
		cart.push({...product, quantity: 1});
	} else {
		cart[index].quantity += 1;
	}
	saveCart(cart);
	dispatch({type: 'SET_CART', payload: cart });
}

export const getItemRemover = dispatch => (cart, name) => {
	cart = cart.filter(item => item.name !== name);
	saveCart(cart);
	dispatch({type: 'SET_CART', payload: cart });
}
