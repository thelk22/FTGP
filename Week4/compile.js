const path = require("path");
const fs = require("fs");
const solc = require("solc");

const pathFirstSmartContract = path.resolve(
  __dirname,
  "contracts",
  "SimpleStorage.sol"
);

const source = fs.readFileSync(pathFirstSmartContract, "utf8");

var input = {
  language: "Solidity",
  sources: {
    "SimpleStorage.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

let output = JSON.parse(solc.compile(JSON.stringify(input)));

module.exports = output.contracts["SimpleStorage.sol"].SimpleStorage;
