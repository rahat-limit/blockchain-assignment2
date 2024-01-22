
// web3.eth.sendTransaction({from: '0x123...', data: '0x432...'})
// .once('sending', function(payload){ ... })
// .once('sent', function(payload){ ... })2
// .once('transactionHash', function(hash){ ... })
// .once('receipt', function(receipt){ ... })
// .on('confirmation', function(confNumber, receipt, latestBlockHash){ ... })
// .on('error', function(error){ ... })
// .then(function(receipt){
//     // will be fired once the receipt is mined
// });

// web3.eth.getBalance('0xdDBf7BB649dDA51e12E3a7992D72caAA079483d2').then((balance) => console.log(balance));
var ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "Receiver",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "Sender",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "currentHour",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "currentMinute",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "currentSecond",
				"type": "uint256"
			}
		],
		"name": "Timestamp",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAddressTransactionSender",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestTransactionTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTransactionReceiver",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var bytecode = "608060405234801562000010575f80fd5b506040518060400160405280600581526020017f54656e67650000000000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f746700000000000000000000000000000000000000000000000000000000000081525081600390816200008e9190620005cf565b508060049081620000a09190620005cf565b505050620000b7336107d0620000bd60201b60201c565b620007df565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000130575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401620001279190620006f6565b60405180910390fd5b620001435f83836200014760201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036200019b578060025f8282546200018e91906200073e565b925050819055506200026c565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508181101562000227578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200021e9392919062000789565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002b5578060025f8282540392505081905550620002ff565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200035e9190620007c4565b60405180910390a3505050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620003e757607f821691505b602082108103620003fd57620003fc620003a2565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620004617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000424565b6200046d868362000424565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620004b7620004b1620004ab8462000485565b6200048e565b62000485565b9050919050565b5f819050919050565b620004d28362000497565b620004ea620004e182620004be565b84845462000430565b825550505050565b5f90565b62000500620004f2565b6200050d818484620004c7565b505050565b5b818110156200053457620005285f82620004f6565b60018101905062000513565b5050565b601f82111562000583576200054d8162000403565b620005588462000415565b8101602085101562000568578190505b62000580620005778562000415565b83018262000512565b50505b505050565b5f82821c905092915050565b5f620005a55f198460080262000588565b1980831691505092915050565b5f620005bf838362000594565b9150826002028217905092915050565b620005da826200036b565b67ffffffffffffffff811115620005f657620005f562000375565b5b620006028254620003cf565b6200060f82828562000538565b5f60209050601f83116001811462000645575f841562000630578287015190505b6200063c8582620005b2565b865550620006ab565b601f198416620006558662000403565b5f5b828110156200067e5784890151825560018201915060208501945060208101905062000657565b868310156200069e57848901516200069a601f89168262000594565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620006de82620006b3565b9050919050565b620006f081620006d2565b82525050565b5f6020820190506200070b5f830184620006e5565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6200074a8262000485565b9150620007578362000485565b925082820190508082111562000772576200077162000711565b5b92915050565b620007838162000485565b82525050565b5f6060820190506200079e5f830186620006e5565b620007ad602083018562000778565b620007bc604083018462000778565b949350505050565b5f602082019050620007d95f83018462000778565b92915050565b61104680620007ed5f395ff3fe608060405234801561000f575f80fd5b50600436106100b2575f3560e01c806370a082311161006f57806370a082311461018e578063841b39fc146101be57806395d89b41146101dc578063a9059cbb146101fa578063d45e3f4a1461022a578063dd62ed3e14610248576100b2565b806306fdde03146100b6578063095ea7b3146100d457806318160ddd1461010457806323b872dd14610122578063313ce567146101525780635749672c14610170575b5f80fd5b6100be610278565b6040516100cb9190610bfd565b60405180910390f35b6100ee60048036038101906100e99190610cae565b610308565b6040516100fb9190610d06565b60405180910390f35b61010c61032a565b6040516101199190610d2e565b60405180910390f35b61013c60048036038101906101379190610d47565b610333565b6040516101499190610d06565b60405180910390f35b61015a610361565b6040516101679190610db2565b60405180910390f35b610178610369565b6040516101859190610dda565b60405180910390f35b6101a860048036038101906101a39190610df3565b6103a7565b6040516101b59190610d2e565b60405180910390f35b6101c66103ec565b6040516101d39190610dda565b60405180910390f35b6101e461042a565b6040516101f19190610bfd565b60405180910390f35b610214600480360381019061020f9190610cae565b6104ba565b6040516102219190610d06565b60405180910390f35b6102326104dc565b60405161023f9190610d2e565b60405180910390f35b610262600480360381019061025d9190610e1e565b61056e565b60405161026f9190610d2e565b60405180910390f35b60606003805461028790610e89565b80601f01602080910402602001604051908101604052809291908181526020018280546102b390610e89565b80156102fe5780601f106102d5576101008083540402835291602001916102fe565b820191905f5260205f20905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b5f806103126105f0565b905061031f8185856105f7565b600191505092915050565b5f600254905090565b5f8061033d6105f0565b905061034a858285610609565b61035585858561069b565b60019150509392505050565b5f6012905090565b5f7fd6558c3ed910d959271054471fd1c326679d9fece99c5091b00ed89627cf2bfc336040516103999190610dda565b60405180910390a133905090565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f7f118a5083d0e05d992890447dcdfc79fa57335a4fdc5d1ef4216304d2ff8a325f3060405161041c9190610dda565b60405180910390a130905090565b60606004805461043990610e89565b80601f016020809104026020016040519081016040528092919081815260200182805461046590610e89565b80156104b05780601f10610487576101008083540402835291602001916104b0565b820191905f5260205f20905b81548152906001019060200180831161049357829003601f168201915b5050505050905090565b5f806104c46105f0565b90506104d181858561069b565b600191505092915050565b5f804290505f6018610e10836104f29190610f13565b6104fc9190610f43565b90505f603c808461050d9190610f13565b6105179190610f43565b90505f603c846105279190610f43565b90507f6e7fc4c05ca8063866cc6a71125f61c818f62ae13f4aed6bfba49481f3d6333983838360405161055c93929190610f73565b60405180910390a18394505050505090565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b610604838383600161078b565b505050565b5f610614848461056e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106955781811015610686578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161067d93929190610fa8565b60405180910390fd5b61069484848484035f61078b565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361070b575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107029190610dda565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361077b575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107729190610dda565b60405180910390fd5b61078683838361095a565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036107fb575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016107f29190610dda565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016108629190610dda565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610954578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161094b9190610d2e565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109aa578060025f82825461099e9190610fdd565b92505081905550610a78565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610a33578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610a2a93929190610fa8565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610abf578060025f8282540392505081905550610b09565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b669190610d2e565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610baa578082015181840152602081019050610b8f565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610bcf82610b73565b610bd98185610b7d565b9350610be9818560208601610b8d565b610bf281610bb5565b840191505092915050565b5f6020820190508181035f830152610c158184610bc5565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610c4a82610c21565b9050919050565b610c5a81610c40565b8114610c64575f80fd5b50565b5f81359050610c7581610c51565b92915050565b5f819050919050565b610c8d81610c7b565b8114610c97575f80fd5b50565b5f81359050610ca881610c84565b92915050565b5f8060408385031215610cc457610cc3610c1d565b5b5f610cd185828601610c67565b9250506020610ce285828601610c9a565b9150509250929050565b5f8115159050919050565b610d0081610cec565b82525050565b5f602082019050610d195f830184610cf7565b92915050565b610d2881610c7b565b82525050565b5f602082019050610d415f830184610d1f565b92915050565b5f805f60608486031215610d5e57610d5d610c1d565b5b5f610d6b86828701610c67565b9350506020610d7c86828701610c67565b9250506040610d8d86828701610c9a565b9150509250925092565b5f60ff82169050919050565b610dac81610d97565b82525050565b5f602082019050610dc55f830184610da3565b92915050565b610dd481610c40565b82525050565b5f602082019050610ded5f830184610dcb565b92915050565b5f60208284031215610e0857610e07610c1d565b5b5f610e1584828501610c67565b91505092915050565b5f8060408385031215610e3457610e33610c1d565b5b5f610e4185828601610c67565b9250506020610e5285828601610c67565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610ea057607f821691505b602082108103610eb357610eb2610e5c565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610f1d82610c7b565b9150610f2883610c7b565b925082610f3857610f37610eb9565b5b828204905092915050565b5f610f4d82610c7b565b9150610f5883610c7b565b925082610f6857610f67610eb9565b5b828206905092915050565b5f606082019050610f865f830186610d1f565b610f936020830185610d1f565b610fa06040830184610d1f565b949350505050565b5f606082019050610fbb5f830186610dcb565b610fc86020830185610d1f565b610fd56040830184610d1f565b949350505050565b5f610fe782610c7b565b9150610ff283610c7b565b925082820190508082111561100a57611009610ee6565b5b9291505056fea264697066735822122040e9e1b608369787d167384cbfa1c44f75a8734440298c11b2aa2a318423166464736f6c63430008160033"; 

// var address = "0xdDBf7BB649dDA51e12E3a7992D72caAA079483d2";
// var addressAccount2 = "0x64572949C952384275484654cD391129939a925D";
// const { Web3, Contract } = require('web3');


// const httpProvider = new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545");
// const web3 = new Web3(httpProvider);

// var contract = new web3.eth.Contract(ABI, address);

// web3.eth.getBlock('latest').then(console.log);

// contract.getPastEvents('AllEvents', {
//     fromBlock: 36924961,
//     toBlock: "latest"
// },
// (err, res) => console.log(res))

// contract.on('Receiver', (from, to, val, event) => {
//     console.log(JSON.stringify({
//         "from": from,
//         "to": to,
//         "val": val,
//         "event": event
//     }));
// });

// block get address - 36924961
// web3.eth.getBlock(36924961).then((balance) => console.log(balance));


// web3.eth.getAccounts().then((account) => {
//     console.log(account);
//     contract
//         .deploy({ data: bytecode })
//         .send({ from: addressAccount2, gas: 300000 })
//         .on("receipt", (receipt) => {
//             // Contract Address will be returned here
//             console.log("Contract Address:", receipt.contractAddress);
//         })
//         .then((initialContract) => {
//             initialContract.methods.message().call((err, data) => {
//                 console.log("Initial Data:", data);
//             });
//         });
// });

const fs = require("fs").promises;
const solc = require("solc");

async function main() {
  // Load the contract source code
  const sourceCode = await fs.readFile("Demo.sol", "utf8");
  // Compile the source code and retrieve the ABI and Bytecode
  const { abi, bytecode } = compile(sourceCode, "Demo");
  // Store the ABI and Bytecode into a JSON file
  const artifact = JSON.stringify({ abi, bytecode }, null, 2);
  await fs.writeFile("Demo.json", artifact);
}

function compile(sourceCode, contractName) {
  // Create the Solidity Compiler Standard Input and Output JSON
  const input = {
    language: "Solidity",
    sources: { main: { content: sourceCode } },
    settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } },
  };
  // Parse the compiler output to retrieve the ABI and Bytecode
  const output = solc.compile(JSON.stringify(input));
  const artifact = JSON.parse(output).contracts.main[contractName];
  return {
    abi: artifact.abi,
    bytecode: artifact.evm.bytecode.object,
  };
}

main()