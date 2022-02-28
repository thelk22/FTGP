const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { abi, evm } = require("../compile.js");
const assert = require("assert");

const bytecode = evm.bytecode.object;

let accounts;
let storage;

// Define a function to deploy a contract
async function deployContract(data) {
  accounts = await web3.eth.getAccounts();
  const tx = {
    from: accounts[0],
    data: data,
  };
  estimatedGas = await web3.eth.estimateGas(tx);
  tx.gas = parseInt(estimatedGas * 1.02);
  result = await web3.eth.sendTransaction(tx);
  console.log(`The deployed contract address is: ${result.contractAddress}`);
  SimpleStorage = new web3.eth.Contract(abi, result.contractAddress);
}
// deployContract(bytecode);

// Now turn the above function into a test
// IMPORTANT: need to add 'mocha test/*.test.js' to the package.json file in order to run mocha tests

// This runs before each mocha test, it deploys the contract
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  const tx = {
    from: accounts[0],
    data: bytecode,
  };
  estimatedGas = await web3.eth.estimateGas(tx);
  tx.gas = parseInt(estimatedGas * 1.02);
  result = await web3.eth.sendTransaction(tx);
  console.log(`The deployed contract address is: ${result.contractAddress}`);
  SimpleStorage = new web3.eth.Contract(abi, result.contractAddress);
});

describe("SimpleStorage Tests", () => {
  it("Deploys a contract", async () => {
    assert.ok(SimpleStorage.options.address);
  });
  it("Sets an unsigned integer", async () => {
    await SimpleStorage.methods.set(123).send({ from: accounts[1] });
    const message = await SimpleStorage.methods.get().call();
    assert.equal(message, 123);
  });
});
