
import { PeraWalletConnect } from "@perawallet/connect";
import { DeflyWalletConnect } from "@blockshake/defly-connect";

export const peraWallet = new PeraWalletConnect({ chainId: 416002 });
export const deflyWallet = new DeflyWalletConnect({chainId: 416002});

import { connectedAddress, connectedWallet } from "../store";

export enum WALLET_CONNECTION {NONE,PERA, DEFLY}

function getWalletConnection(walletConnection: WALLET_CONNECTION){
  if(walletConnection === WALLET_CONNECTION.PERA){
    return peraWallet
  }
  else if(walletConnection === WALLET_CONNECTION.DEFLY){
    return deflyWallet
  }
  else{
    return null
  }
}

export function handleConnectWalletClick(walletConnection: WALLET_CONNECTION) {
  console.log("helloo ?")
  const connection = getWalletConnection(walletConnection)
  console.log(walletConnection, WALLET_CONNECTION.PERA, WALLET_CONNECTION.DEFLY, WALLET_CONNECTION.NONE);
  connection
      .connect()
      .then((newAccounts) => {
        // Setup the disconnect event listener
        connection.connector.on("disconnect", handleDisconnectWalletClick);
        connectedAddress.set(newAccounts[0]);
        connectedWallet.set(walletConnection);
        alert("here !!!")
        console.log("set options and address " + connectedAddress + connectedWallet)
      })
      .catch((error) => {
        if (error.data && error.data.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
      console.log("helloo 2?")
  }

  export function handleDisconnectWalletClick(walletConnection: WALLET_CONNECTION) {

    const connection = getWalletConnection(walletConnection)
    console.log(walletConnection, WALLET_CONNECTION.PERA, WALLET_CONNECTION.DEFLY, WALLET_CONNECTION.NONE);
    console.log(connection)
    connection
      .disconnect()
      .then(() => {
        connectedAddress.set("");
        connectedWallet.set(WALLET_CONNECTION.NONE);
      })
      .catch((error) => {
        console.log(error);
      });
  }
