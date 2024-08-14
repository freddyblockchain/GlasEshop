import { writable, type Writable } from "svelte/store";

export const cartItems: Writable<CartItem[]> = writable([]);