const ganache = require("ganache-core");
const Web3 = require("web3");
// Connect web3 to the local private blockchain (Ganache)
const web3 = new Web3(ganache.provider());

// Callback example
// Define a function to be used as the callback function
function consoleLog(text) {
  console.log(text);
}
// Define a function which invokes the callback function
function logCallback(text, callback) {
  callback(text);
}
// Indirectly invoke the callback function
logCallback("Hello World", consoleLog);

// Promise example
let a = web3.eth.getAccounts();
// then() can include a callback method, saying what to do when a result is returned
console.log(a.then(console.log));

// Arrow function example
function addHundred(a) {
  return a + 100;
}
// Equivalent arrow function. Note that arrow functions cannot have a name, they are anonymous
(a) => {
  return a + 100;
};

// Combine promise and arrow function
let b = web3.eth.getAccounts();
b.then((res) => {
  // Print first eth account
  console.log(res[0]);
}).catch((err) => {
  console.log(err);
});

// async example
async function getAccounts() {
  // Make web3 API (asynchronous) request to get accounts
  // getAccounts can include a callback function as a parameter
  accounts = await web3.eth.getAccounts();
  // The following lines will not be executed until the promise above has returned a result
  console.log(accounts);
}
getAccounts();
