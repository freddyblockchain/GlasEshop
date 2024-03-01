import algosdk from "algosdk";

const server = "https://testnet-api.algonode.cloud"; // AlgoNode TestNet API server
const token = ""; // No token required for AlgoNode
const port = ""; // Port not needed for this URL

export const algodClient = new algosdk.Algodv2(token, server, port);