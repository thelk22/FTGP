const Web3 = require("web3");
const ethers = require("ethers");
const { abi, evm } = require("./compile.js");

const infuraId = "1c722de80b77412f86091fdf4d04b74b";
const apiKey = "https://mainnet.infura.io/v3/" + infuraId;
const web3 = new Web3(new Web3.providers.HttpProvider(apiKey));

const mnemonicPhrase =
  "bird now physical flavor file divide now impulse casino whip sponsor ankle";
const MyWallet = ethers.Wallet.fromMnemonic(mnemonicPhrase);

async function deploySmartContract() {
  const tx = {
    from: MyWallet.address,
    data: evm.bytecode.object,
  };
  estGas = await web3.eth.estimateGas(tx);
  // Add a tip
  tx.gas = parseInt(estGas * 1.02);
  const signedTx = await web3.eth.accounts.signTransaction(
    tx,
    MyWallet.privateKey
  );
  //   console.log(signedTx);
  //   console.log(signedTx.rawTransaction);
  result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(`Contract deployed to ${result.contractAddress}`);
}

deploySmartContract();
