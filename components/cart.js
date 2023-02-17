import {store} from 'https://cdn.jsdelivr.net/npm/reefjs@12/dist/reef.es.min.js';

// Hold cart data
let cart = store(JSON.parse(localStorage.getItem('cart')) || {});


/**
 * Add a photo to the cart
 * @param {String} id The photo ID
 */
function addToCart (id) {
	cart[id] = true;
	localStorage.setItem('cart', JSON.stringify(cart));
   
}

/**
 * Check if an item is in the cart
 * @param  {String}  id The photo ID
 * @return {Boolean}    If true, the item is in the cart
 */
function inCart (id) {
	return cart[id];
}


/**
 * Check the count of items in cart
 * 
 * @return {Integer}    
 */
function getCartCount() {
    return  `(${Object.keys(cart).length})`;
}






export {addToCart, inCart, getCartCount};