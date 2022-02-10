const ethers = require("ethers");

const mnemonicPhrase =
  "crowd war halve minute spread plane slight crash fun nail fiber harbour";
const wallet = ethers.Wallet.fromMnemonic(mnemonicPhrase);
console.log(wallet);
