alert("Choose a value in Ether \nChoose heads or tails");

let idVname = document.getElementById("Vname");
let binaryRandomNumber = Math.floor(Math.random() * 2);

console.log(binaryRandomNumber);

// Define global variable which can be set and read by all functions in this script
var globalVariable;

// Add an event listener to the idVname element of the DOM (i.e. the element with ID "Vname")
// When something changes in this element, trigger the function defined in the second parameter
idVname.addEventListener("change", function () {
  let eth = Number(Vname.value);
  if (!isNaN(eth)) {
    if (Number.isInteger(eth) && eth > 0) {
      if (confirm(`Are you sure you want to bet ${eth} ETH?`)) {
        alert("If so, please select your choice!");
        globalVariable = eth;
      } else {
        Vname.value = "";
      }
    } else {
      alert("Please enter a positive integer amount of Eth");
      Vname.value = "";
    }
  } else {
    alert("Please enter a number");
    Vname.value = "";
  }
});

let choice;
function headFunction() {
  choice = 1;
  x = "You have chosen heads!";
  processChoice(x);
}

function tailFunction() {
  choice = 0;
  x = "You have chosen tails!";
  processChoice(x);
}

function processChoice(x) {
  if (typeof globalVariable !== undefined) {
    if (confirm(x)) {
      if (binaryRandomNumber == choice) {
        alert(
          `Congratulations! \nYou have won ${
            2 * globalVariable
          } ETH on your bet of ${globalVariable} ETH.`
        );
        Vname.value = "";
      } else {
        alert(`Bad luck! You lost the bet.`);
        Vname.value = "";
      }
    }
  }
}
