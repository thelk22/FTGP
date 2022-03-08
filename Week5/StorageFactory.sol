// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import "./SimpleStorage.sol"; 

// Inheritance in Solidity; this contract will have all of the methods and attributes of the SimpleStorage contract
contract StorageFactory is SimpleStorage {
    
    SimpleStorage[] public simpleStorageArray;
    
    // This will deploy a SimpleStorage contract to the blockchain
    function createSimpleStorageContract() public {
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArray.push(simpleStorage);
    }
    
    // Call the store() method of the SimpleStorage contract at the specified index in the simpleStorageArray state
    function sfStore(uint256 _simpleStorageIndex, uint256 _simpleStorageNumber) public {
        // Address 
        // ABI 
        // Note: in a proper smart contract it would be in your best interest to combine lines 23 & 25 to reduce gas fees
        // Explicitly cast to the address type
        address contractAddress = address(simpleStorageArray[_simpleStorageIndex]);
        // Initialize a new SimpleStorage object from the address
        SimpleStorage(contractAddress).store(_simpleStorageNumber); 

        //this line simply gets the SimpleStorage object at the index _simpleStorageIndex in the array simpleStorageArray
        //simpleStorageArray[_simpleStorageIndex].store(_simpleStorageNumber);
    }
    
    function sfGet(uint256 _simpleStorageIndex) public view returns (uint256) {
        //this line has an explicit cast to the address type and initializes a new SimpleStorage object from the address 
        return SimpleStorage(address(simpleStorageArray[_simpleStorageIndex])).retrieve(); 

        //this line simply gets the SimpleStorage object at the index _simpleStorageIndex in the array simpleStorageArray
        //return simpleStorageArray[_simpleStorageIndex].retrieve(); 
    }
}