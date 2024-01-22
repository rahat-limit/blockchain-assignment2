/* SPDX-License-Identifier: UNLICENSED */
pragma solidity >=0.7.0 <0.9.0;
contract Demo {
  address private owner;
  string name;
  event Echo(string message);

  constructor() {
    owner = msg.sender;
  }
  function changeName(string memory newName) public {
    name = newName;
  }
  function showName() public view returns(string memory) {
    return name;
  }
  function echo(string calldata message) external {
    emit Echo(message);
  }
}


// SPDX-License-Identifier: GPL-3.0

// pragma solidity >=0.8.2 <0.9.0;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// contract AituRakhat is ERC20 {
//     // external - cannot be called inside contract 
//     event Timestamp(uint256 currentHour, uint256 currentMinute, uint256 currentSecond);
//     event Receiver(address addr);
//     event Sender(address addr);

//     constructor() ERC20("Tenge", "tg") {
//         _mint(msg.sender, 2000);
//     }

//     function getLatestTransactionTimestamp() external returns (uint256) { 
//         uint256 currentTime = block.timestamp;
//         uint256 currentHour = (currentTime / 3600) % 24; // Hour
//         uint256 currentMinute = (currentTime / 60) % 60; // Minute
//         uint256 currentSecond = currentTime % 60; // Second
//         emit Timestamp(currentHour, currentMinute, currentSecond);
//         return currentTime;
//     }

//     function getAddressTransactionSender() external returns (address) {
//         emit Sender(msg.sender);
//         return msg.sender;
//     }
    
//     function getTransactionReceiver() external returns (address) {
//         emit Receiver(address(this)); 
//         return address(this); 
//     }
// }
