

function storeCart(id) {
    sessionStorage.setItem(`cart_${id}`, true);
}

function retrieveCart(id) {
    return sessionStorage.getItem(`cart_${id}`);
    
}



export {storeCart, retrieveCart};