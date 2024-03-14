import { writable } from 'svelte/store';
import { WALLET_CONNECTION } from './algorand/WalletHandler';

export const connectedAddress = writable("");

export const connectedWallet = writable(WALLET_CONNECTION.NONE)