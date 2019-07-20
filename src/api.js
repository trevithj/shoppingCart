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
	const items = cart.filter(item => {
		return item.name === product.name;
	});
	if(items.length > 1) throw Error(`Duplicate item in cart: ${product.name}`);
	if(items.length === 0) {
		cart.push({...product, quantity: 1});
	} else {
		items[0].quantity +=1;
	}
	saveCart(cart);
}
