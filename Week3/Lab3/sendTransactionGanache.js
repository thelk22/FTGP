const Web3 = require("web3");
const ganache = require("ganache-core");
const web3 = new Web3(ganache.provider((port = 8545)));

// ganache-cli -m "bird now physical flavor file divide now impulse casino whip sponsor ankle"

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

let accounts;

async function sendEther(amount) {
  if (amount < 0) {
    console.error("Please enter an amount >=0");
    return;
  }
  // Get the accounts in Ganache
  accounts = await web3.eth.getAccounts();
  // Get the balances
  let account1_balance = await getAccountBalance(accounts[0]);
  let account2_balance = await getAccountBalance(accounts[1]);
  console.log(`Account 1 balance is: ${account1_balance}`);
  console.log(`Account 2 balance is: ${account2_balance}`);
  // Get the nonce of a wallet
  let account1_nonce = await getAccountNonce(accounts[0]);
  // Create a transaction
  tx = {
    from: accounts[0],
    to: accounts[1],
    value: web3.utils.toWei(amount.toString(), "ether"),
  };
  await web3.eth.sendTransaction(tx);
  account1_balance = getAccountBalance(accounts[0]);
  console.log("Transaction sent");
  console.log(`Account 1 balance is: ${account1_balance}`);
}

sendEther(1);
