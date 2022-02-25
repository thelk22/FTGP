const Ethers = require("ethers");
const Web3 = require("web3");

// QUESTIONS 1-3
let mnemonicPhrase =
  "bird now physical flavor file divide now impulse casino whip sponsor ankle";
let wallet = Ethers.Wallet.fromMnemonic(mnemonicPhrase);
console.log(wallet);
console.log(wallet.privateKey);
let infuraId = "1c722de80b77412f86091fdf4d04b74b";
let privKey = wallet.privateKey;
console.log(`The private key for Luke's test account is ${privKey}`);
let pubKey = wallet.publicKey;
console.log(`The public key for Luke's test account is ${pubKey}`);
let address = wallet.address;
console.log(console.log(`The address for Luke's test account is ${address}`));

// QUESTION 4
// Check the balance of the account
let infuraAddress = "https://rinkeby.infura.io/v3/" + infuraId;
let web3provider = new Web3(infuraAddress);
// First, use a promise to get the balance of the account
var balance = web3provider.eth.getBalance(address).then((result) => {
  console.log(result);
});

// This returned a balance of 0
// Interestingly, this shows that all you need is the public address to view the balance of an Ethereum account
// Now, use an asynchronous function to get the balance
async function getBalance(addr) {
  var balance = await web3provider.eth.getBalance(addr);
  console.log(`The balance of ${addr} on Infura is ${balance}`);
}
getBalance(address);
// So, we've looked at two methods for returning the balance of an account:
// 1) Using a promise
// 2) Using an asynchronous function and the await keyword

// QUESTION 5
// a) Does Ganache run a full node?
//    No it doesn't! It simulates what a full client does.
const ganache = require("ganache-core");
const web3_ganache = new Web3(ganache.provider());

async function getAddresses() {
  let addresses = await web3_ganache.eth.getAccounts();
  return addresses;
}

let a = 5;
async function callbackOnAccount(i, callback) {
  let addresses = await web3_ganache.eth.getAccounts();
  console.log(addresses);
  let address = addresses[i - 1];
  console.log(`The address of account ${i} is ${address}`);
  balance = await web3_ganache.eth.getBalance(address);
  console.log(`The balance of account ${i} is ${balance}`);
  console.log(`Performing callback on account ${i}`);
  callback(address);
  x = 5;
  console.log(`PRINTING X: ${x}`);
}
// e) What happens when you run the following from the CLI?
// ganache-cli -m "bird now physical flavor file divide now impulse casino whip sponsor ankle"
// answer) This invokes the ganache-cli executable and passes the string (a mnemonic) as input.
//         Doing this returns a (HD = hierarchical deterministic) wallet.
// f) Connected local ganache-cli blockchain to Metamask
//    Doing this required running the local ganache-cli, then adding a new network in Metamask with the
//    address of ganache-cli and the chainId. Then we imported one of the accounts that exists in the
//    ganache-cli using its private key. All of these accounts are initialised with 100ETH.
// g) The nonce of a wallet account (an EOA) is the number of transactions that the account has initiated.
let myTestAddress = "0xD6Bf7F551585d49C18c38Eb067CeA0AadB2a5E47";
async function getAccountNonce(address) {
  let nonce = await web3_ganache.eth.getTransactionCount(address);
  console.log(`The nonce of address ${address} is ${nonce}`);
  return nonce;
}
getAccountNonce(myTestAddress);
async function getAccountBalance(address) {
  let balanceWei = await web3_ganache.eth.getBalance(address);
  let balanceEth = web3_ganache.utils.fromWei(balanceWei);
  console.log(`The balance of ${address} is ${balanceEth}`);
  return balanceWei;
}
getAccountBalance(myTestAddress);
// callbackOnAccount(2, getBalance);
// callbackOnAccount(2, getAccountNonce);

// i) Send some Eth from one account to another
// The solutions for this are in sendTransaction.js

// QUESTION 6
// a) What is a raw transaction?
//    It is a message sent across the P2P network from an EOA to another EOA or a wallet.
//    Transactions are the only thing that can cause a change in the Ethereum global state and leave an indelible mark on the blockchain.
//    They can be used to send Ether between EOA accounts, deploy contracts and call deployed contracts (by including data describing which methods to call)
// b & c) Create a transaction and send it from one wallet to another. Do you need a private key?
//    Yes, we will need a private key for the wallet we are sending the transaction from.
//    This is to sign the transaction, which is necessary for any transaction being sent on Ethereum
// Send a transaction from ganache account 0 to ganache account 1
// The solutions for this are in sendTransaction.js

// QUESTION 7
