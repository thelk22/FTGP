const Ethers = require("ethers");
const Web3 = require("web3");
const ganache = require("ganache-cli");

// To start Ganache...
//  ganache-cli -m "bird now physical flavor file divide now impulse casino whip sponsor ankle"

const web3 = new Web3(ganache.provider(), (port = 8545));

async function getAccountsAndBalances() {
  var accounts = await web3.eth.getAccounts();
  console.log(`Accounts | Balance (ETH)`);
  for (const acct of accounts) {
    var balance = await web3.eth.getBalance(acct);
    console.log(`${acct}: ${web3.utils.fromWei(balance, "ether")}`);
  }
  return accounts;
}

async function sendTransaction(unsignedTrx, address0_key) {
  console.log(`Signing transaction to send ${unsignedTrx.value} Wei`);
  var signedTrx = await web3.eth.accounts.signTransaction(
    unsignedTrx,
    address0_key
  );
  console.log(signedTrx);
  var receipt = await web3.eth.sendSignedTransaction(
    // Note: here you have to send the raw signed transaction, which is in hex format
    signedTrx.rawTransaction
  );
  console.log(`Transaction successful with hash ${receipt.transactionHash}`);
}

var fromAddress = "0xD6Bf7F551585d49C18c38Eb067CeA0AadB2a5E47";
var toAddress = "0xea1050DBa435FCCdf1E4f027Cae948Bb0CE12Bfd";
var unsignedTrx = {
  from: fromAddress,
  to: toAddress,
  value: web3.utils.toWei("0.01", "ether"),
  gas: 21000,
};
from_address_key =
  "0x496431af2237583e2f37382a207117db30f15c28a0b9205a89eff098cd1b8364";

//   ganache-cli --account="0x496431af2237583e2f37382a207117db30f15c28a0b9205a89eff098cd1b8364,1000000000000000000000000000000000000000"

getAccountsAndBalances();
// sendTransaction(unsignedTrx, from_address_key);
