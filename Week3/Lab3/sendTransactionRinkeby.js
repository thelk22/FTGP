const Web3 = require("web3");
const Ethers = require("ethers");

let mnemonicPhrase =
  "bird now physical flavor file divide now impulse casino whip sponsor ankle";
let wallet = Ethers.Wallet.fromMnemonic(mnemonicPhrase);
let privKey = wallet.privateKey;
let address1 = wallet.address;
let address2 = "0xF1C37BC188643DF4Bf15Fd437096Eb654d30abc1";

let infuraId = "1c722de80b77412f86091fdf4d04b74b";
let infuraAddress = "https://rinkeby.infura.io/v3/" + infuraId;
let web3 = new Web3(infuraAddress);

async function getAccountNonce(address) {
  let nonce = await web3.eth.getTransactionCount(address);
  console.log(`The nonce of address ${address} is ${nonce}`);
  return nonce;
}
async function getAccountBalance(address) {
  let balanceWei = await web3.eth.getBalance(address);
  let balanceEth = web3.utils.fromWei(balanceWei);
  console.log(`The balance of ${address} is ${balanceEth}`);
  return balanceWei;
}

async function signAndSendEther(amount, privKey) {
  if (amount < 0) {
    console.error("Please enter an amount >=0");
    return;
  }
  // Get the accounts in Ganache
  accounts = await web3.eth.getAccounts();
  // Get the balances
  let account1_balance = await getAccountBalance(address1);
  let account2_balance = await getAccountBalance(address2);
  console.log(`Account 1 balance is: ${account1_balance}`);
  console.log(`Account 2 balance is: ${account2_balance}`);
  // Get the nonce of a wallet
  let account1_nonce = await getAccountNonce(address1);
  // Create a transaction
  tx = {
    from: address1,
    to: address2,
    value: web3.utils.toWei(amount.toString(), "ether"),
    gas: 21000,
  };
  let signedTx = await web3.eth.accounts.signTransaction(tx, privKey);
  await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  account1_balance = getAccountBalance(address1);
  console.log("Transaction sent");
  console.log(`Account 1 balance is: ${account1_balance}`);
}

signAndSendEther(0.01, privKey);
