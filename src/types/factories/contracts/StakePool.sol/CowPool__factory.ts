/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CowPool,
  CowPoolInterface,
} from "../../../contracts/StakePool.sol/CowPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dev_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dev",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_yieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_starttime",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "starttime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060055560006006556305a39a80600b5534801561002257600080fd5b5060405161120038038061120083398101604081905261004191610074565b600c8054336001600160a01b031991821617909155600d80549091166001600160a01b03929092169190911790556100a4565b60006020828403121561008657600080fd5b81516001600160a01b038116811461009d57600080fd5b9392505050565b61114d806100b36000396000f3fe608060405234801561001057600080fd5b50600436106101975760003560e01c806380faa57d116100e3578063c8f33c911161008c578063df136d6511610066578063df136d651461033a578063e9fad8ee14610343578063ebe2b12b1461034b57600080fd5b8063c8f33c9114610316578063cd3daf9d1461031f578063d5f394881461032757600080fd5b806391cca3db116100bd57806391cca3db146102dd578063a694fc3a146102f0578063c4d66de81461030357600080fd5b806380faa57d146102ac5780638b876347146102b45780638da58897146102d457600080fd5b80633c6b16ab1161014557806370a082311161011f57806370a082311461026757806376d5de85146102905780637b0a47ee146102a357600080fd5b80633c6b16ab1461021b5780633d18b9121461022e57806351ed6a301461023657600080fd5b806318160ddd1161017657806318160ddd146101f75780631be05289146101ff5780632e1a7d4d1461020857600080fd5b80628cc2621461019c5780630700037d146101c25780631794bb3c146101e2575b600080fd5b6101af6101aa366004610fad565b610354565b6040519081526020015b60405180910390f35b6101af6101d0366004610fad565b600a6020526000908152604090205481565b6101f56101f0366004610fc8565b6103d1565b005b6001546101af565b6101af600b5481565b6101f5610216366004611004565b610519565b6101f5610229366004611004565b610645565b6101f56107c5565b60005461024f906201000090046001600160a01b031681565b6040516001600160a01b0390911681526020016101b9565b6101af610275366004610fad565b6001600160a01b031660009081526002602052604090205490565b60035461024f906001600160a01b031681565b6101af60065481565b6101af6108cc565b6101af6102c2366004610fad565b60096020526000908152604090205481565b6101af60045481565b600d5461024f906001600160a01b031681565b6101f56102fe366004611004565b6108df565b6101f5610311366004610fad565b610a03565b6101af60075481565b6101af610af4565b600c5461024f906001600160a01b031681565b6101af60085481565b6101f5610b58565b6101af60055481565b6001600160a01b0381166000908152600a60209081526040808320546009909252822054670de0b6b3a76400009061038a610af4565b6103949190611033565b6001600160a01b0385166000908152600260205260409020546103b7919061104a565b6103c19190611069565b6103cb919061108b565b92915050565b600054610100900460ff166103ec5760005460ff16156103f0565b303b155b6104585760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b600054610100900460ff1615801561047a576000805461ffff19166101011790555b600c546001600160a01b031633146104c05760405162461bcd60e51b81526020600482015260096024820152682337b93134b23232b760b91b604482015260640161044f565b6104c984610a03565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03851617905560048290558015610513576000805461ff00191690555b50505050565b33610522610af4565b60085561052d6108cc565b6007556001600160a01b038116156105745761054881610354565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b6004544210156105b25760405162461bcd60e51b81526020600482015260096024820152681b9bdd081cdd185c9d60ba1b604482015260640161044f565b600082116106025760405162461bcd60e51b815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015260640161044f565b61060b82610b7b565b60405182815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a25050565b600061064f610af4565b60085561065a6108cc565b6007556001600160a01b038116156106a15761067581610354565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b600c546001600160a01b031633146106e75760405162461bcd60e51b81526020600482015260096024820152682337b93134b23232b760b91b604482015260640161044f565b60045442111561079d57600554421061070f57600b546107079083611069565b600655610751565b60004260055461071f9190611033565b9050600060065482610731919061104a565b600b54909150610741828661108b565b61074b9190611069565b60065550505b426007819055600b546107639161108b565b6005556040518281527fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9060200160405180910390a15050565b600b546107aa9083611069565b6006556004546007819055600b546107639161108b565b5050565b336107ce610af4565b6008556107d96108cc565b6007556001600160a01b03811615610820576107f481610354565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b60045442101561085e5760405162461bcd60e51b81526020600482015260096024820152681b9bdd081cdd185c9d60ba1b604482015260640161044f565b600061086933610354565b905080156107c157336000818152600a602052604081205560035461089a916001600160a01b039091169083610bd6565b60405181815233907fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e048690602001610639565b60006108da42600554610c6b565b905090565b336108e8610af4565b6008556108f36108cc565b6007556001600160a01b0381161561093a5761090e81610354565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b6004544210156109785760405162461bcd60e51b81526020600482015260096024820152681b9bdd081cdd185c9d60ba1b604482015260640161044f565b600082116109c85760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207374616b652030000000000000000000000000000000000000604482015260640161044f565b6109d182610c83565b60405182815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d90602001610639565b600054610100900460ff16610a1e5760005460ff1615610a22565b303b155b610a855760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161044f565b600054610100900460ff16158015610aa7576000805461ffff19166101011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16620100006001600160a01b0385160217905580156107c1576000805461ff00191690555050565b6000610aff60015490565b610b0a575060085490565b600154600654600754610b1b6108cc565b610b259190611033565b610b2f919061104a565b610b4190670de0b6b3a764000061104a565b610b4b9190611069565b6008546108da919061108b565b33600090815260026020526040902054610b7190610519565b610b796107c5565b565b8060016000828254610b8d9190611033565b90915550503360009081526002602052604081208054839290610bb1908490611033565b9091555050600054610bd3906201000090046001600160a01b03163383610bd6565b50565b6040516001600160a01b038316602482015260448101829052610c6690849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610cdc565b505050565b6000818310610c7a5781610c7c565b825b9392505050565b8060016000828254610c95919061108b565b90915550503360009081526002602052604081208054839290610cb990849061108b565b9091555050600054610bd3906201000090046001600160a01b0316333084610dc1565b6000610d31826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610df99092919063ffffffff16565b805190915015610c665780806020019051810190610d4f91906110a3565b610c665760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161044f565b6040516001600160a01b03808516602483015283166044820152606481018290526105139085906323b872dd60e01b90608401610c02565b6060610e088484600085610e10565b949350505050565b606082471015610e885760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161044f565b6001600160a01b0385163b610edf5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161044f565b600080866001600160a01b03168587604051610efb91906110f1565b60006040518083038185875af1925050503d8060008114610f38576040519150601f19603f3d011682016040523d82523d6000602084013e610f3d565b606091505b5091509150610f4d828286610f58565b979650505050505050565b60608315610f67575081610c7c565b825115610f775782518084602001fd5b8160405162461bcd60e51b815260040161044f919061110d565b80356001600160a01b0381168114610fa857600080fd5b919050565b600060208284031215610fbf57600080fd5b610c7c82610f91565b600080600060608486031215610fdd57600080fd5b610fe684610f91565b9250610ff460208501610f91565b9150604084013590509250925092565b60006020828403121561101657600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110455761104561101d565b500390565b60008160001904831182151516156110645761106461101d565b500290565b60008261108657634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561109e5761109e61101d565b500190565b6000602082840312156110b557600080fd5b81518015158114610c7c57600080fd5b60005b838110156110e05781810151838201526020016110c8565b838111156105135750506000910152565b600082516111038184602087016110c5565b9190910192915050565b602081526000825180602084015261112c8160408501602087016110c5565b601f01601f1916919091016040019291505056fea164736f6c6343000809000a";

type CowPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CowPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CowPool__factory extends ContractFactory {
  constructor(...args: CowPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    dev_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CowPool> {
    return super.deploy(dev_, overrides || {}) as Promise<CowPool>;
  }
  override getDeployTransaction(
    dev_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(dev_, overrides || {});
  }
  override attach(address: string): CowPool {
    return super.attach(address) as CowPool;
  }
  override connect(signer: Signer): CowPool__factory {
    return super.connect(signer) as CowPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CowPoolInterface {
    return new utils.Interface(_abi) as CowPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CowPool {
    return new Contract(address, _abi, signerOrProvider) as CowPool;
  }
}
