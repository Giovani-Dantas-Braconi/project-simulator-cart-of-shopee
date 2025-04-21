async function addItem(userCart, Item) {
    userCart.push(Item);
}


async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=>total + item.subtotal(), 0)
    return result;
}


async function removeItem(userCart, index) {
    index -= 1
    if(index >= 0 && index < userCart.length){
        userCart.splice(index,1)
    }
}

async function deleteItem(userCart, name) {
    
    if(index !== -1){
        userCart.splice(index,1)
    }
}


async function displayCart(userCart) {
    console.log("cart do shopee");
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity} | subtotal = R$${item.subtotal()}`);
    });
    
}


export {addItem, calculateTotal, removeItem, deleteItem, displayCart}