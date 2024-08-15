import { writable, type Writable } from "svelte/store";

const storedCart = sessionStorage.getItem("cart");

export const cartItems: Writable<CartItem[]> = writable(storedCart ? JSON.parse(storedCart): []);

cartItems.subscribe(newCart => {
    sessionStorage.setItem("cart", JSON.stringify(newCart))
})

