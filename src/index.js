import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

console.log("Welcome to your Shopee Cart!");

async function main() {
    // Cria carrinho e wishlist
    const myCart = [];
    const myWishList = [];

    // Cria os itens
    const item1 = await createItem("notebook", 2500.00, 1);
    const item2 = await createItem("pc novinho", 1000.00, 3);

    // Adiciona os itens ao carrinho
    await cartService.addItem(myCart, item1);
    await cartService.addItem(myCart, item2);

    // Exibe o total do carrinho
    const total1 = await cartService.calculateTotal(myCart);
    console.log(`Your total price in the Shopee Cart is $${total1.toFixed(2)}!`);

    // Remove o segundo item
    await cartService.removeItem(myCart, 1); // índice 1, não 2

    // Exibe o carrinho atual
    await cartService.displayCart(myCart);
    console.log("Your cart currently looks like this.");

    // Exibe o novo total
    const total2 = await cartService.calculateTotal(myCart);
    console.log(`Updated total price: $${total2.toFixed(2)}.`);
}

main();
