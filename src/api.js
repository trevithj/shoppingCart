export const fetchCart = () => {
	const sCart = localStorage.getItem('cart');
	return sCart ? JSON.parse(sCart) : [];
};

export const saveCart = cart => {
	localStorage.setItem('cart', JSON.stringify(cart));
}

//format for product: {name, price}
//format for cart item: {name, price, quantity}
export const getItemAdder = cart => product => {
	const index = cart.map(item => item.name).indexOf(product.name);
	if( index === -1 ) {
		cart.push({...product, quantity: 1});
	} else {
		cart[index].quantity += 1;
	}
	saveCart(cart);
}

export const getItemRemover = cart => name => {
	cart = cart.filter(item => item.name !== name);
	saveCart(cart);
	return cart;
}
