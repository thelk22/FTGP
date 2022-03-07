const Web3 = require("web3");
const ethers = require("ethers");
const { abi, evm } = require("./compile.js");

const infuraId = "1c722de80b77412f86091fdf4d04b74b";
const apiKey = "https://mainnet.infura.io/v3/" + infuraId;
const web3 = new Web3(new Web3.providers.HttpProvider(apiKey));

const mnemonicPhrase =
  "bird now physical flavor file divide now impulse casino whip sponsor ankle";
const MyWallet = ethers.Wallet.fromMnemonic(mnemonicPhrase);
py
// You can fill these in with the contract details from Etherscan or some other
// block explorer once you have deployed the contract
const contractAbi = [{}];
const contractAddress = "";
const DeployedContract = new web3.eth.Contract(contractAbi, contractAddress);

// Function for interacting with a method in a contract that requires parameters
async function interactWithContract() {
  // Get the bytecode of the method you want to interact with, and pass in your desired parameters
  // For example, here the method we are interacting with is called 'set'
  let setCall = DeployedContract.methods.set(123).encodeABI();
  const tx = {
    from: MyWallet.address,
    to: contractAddress,
    data: setCall,
  };
  estGas = await web3.eth.estimateGas(tx);
  tx.gas = parseInt(estGas * 1.02);
  const signedTx = await web3.eth.accounts.signTransaction(
    tx,
    MyWallet.privateKey
  );
  result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

// Function for interacting with a contract that doesn't require parameters
async function getStorage() {
  let getCall = await DeployedContract.methods.get().call();
  console.log(getCall);
}
