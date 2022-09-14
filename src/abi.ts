export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hot_",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
    ],
    name: "acceptNomination",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "oldDelegate_",
        type: "address",
      },
      {
        internalType: "address",
        name: "newDelegate_",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "duration_",
        type: "uint24",
      },
      {
        internalType: "uint96",
        name: "fee_",
        type: "uint96",
      },
      {
        internalType: "uint256",
        name: "delegateRightsInteger_",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "offerId_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "acceptOfferToExistingContainer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractForERC20_",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "baseFee_",
        type: "uint96",
      },
    ],
    name: "addOfferPaymentERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "offerId_",
        type: "uint64",
      },
    ],
    name: "cancelOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "changeAssetOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "newDelegate_",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "changeDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "offerId_",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "newExpiry_",
        type: "uint32",
      },
    ],
    name: "changeOfferExpiry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "uint96",
        name: "salePrice_",
        type: "uint96",
      },
    ],
    name: "containerListedForSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proxyRegisterFee_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "treasury_",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "delegationRegisterFee_",
        type: "uint96",
      },
      {
        internalType: "uint32",
        name: "delegationFeePercentage_",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "weth_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deletionNominalEth_",
        type: "uint256",
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
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "delegationId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "container",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "salePrice",
        type: "uint96",
      },
    ],
    name: "ContainerListedForSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "delegationId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegate_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "endTime_",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delegateRightsInteger_",
        type: "uint256",
      },
    ],
    name: "DelegationAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "container",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "oldId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newId",
        type: "uint64",
      },
    ],
    name: "DelegationContainerRelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "delegationId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "containerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "fee",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "durationInDays",
        type: "uint24",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delegateRightsInteger",
        type: "uint256",
      },
    ],
    name: "DelegationCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "delegationId",
        type: "uint64",
      },
    ],
    name: "DelegationDeleted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "uint96",
        name: "salePrice_",
        type: "uint96",
      },
    ],
    name: "delegationListedForSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "delegationId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "salePrice",
        type: "uint96",
      },
    ],
    name: "DelegationListedForSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "delegationId",
        type: "uint64",
      },
    ],
    name: "DelegationOwnerChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "delegate_",
        type: "address",
      },
    ],
    name: "deleteEntry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "provider_",
        type: "uint256",
      },
    ],
    name: "deleteRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hot",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "delivery",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldDelivery",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "provider",
        type: "uint256",
      },
    ],
    name: "DeliveryUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "uint24",
        name: "duration_",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "expiry_",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "collectionOffer_",
        type: "bool",
      },
      {
        internalType: "address",
        name: "collection_",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "offerAmount_",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "offerERC20_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "delegateRightsRequested_",
        type: "uint256",
      },
    ],
    name: "makeOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cold_",
        type: "address",
      },
      {
        internalType: "address",
        name: "delivery_",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
    ],
    name: "nominate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hot",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delivery",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
    ],
    name: "NominationAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hot",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delivery",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "provider",
        type: "uint256",
      },
    ],
    name: "NominationMade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "offerId",
        type: "uint64",
      },
    ],
    name: "OfferAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "offerId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "offerExpiry",
        type: "uint32",
      },
    ],
    name: "OfferExpiryChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "collectionOffer",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "duration",
        type: "uint24",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "expiry",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "offerAmount",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delegateRightsRequested",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
    ],
    name: "OfferMade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hot",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delivery",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "provider",
        type: "uint64",
      },
    ],
    name: "ProxyRecordLive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum IEPSProxyRegister.Participant",
        name: "initiator",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "hot",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "provider",
        type: "uint256",
      },
    ],
    name: "RecordDeleted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "oldDelegate_",
        type: "address",
      },
      {
        internalType: "address",
        name: "newDelegate_",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "fee_",
        type: "uint96",
      },
      {
        internalType: "uint24",
        name: "durationInDays_",
        type: "uint24",
      },
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "delegateRightsInteger_",
        type: "uint256",
      },
    ],
    name: "relistEntry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractForERC20_",
        type: "address",
      },
    ],
    name: "removeOfferPaymentERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "delegate_",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "endTime_",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "delegateRightsInteger_",
        type: "uint256",
      },
    ],
    name: "saveDelegationRecord",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rightsIndex_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "rightsDescription_",
        type: "string",
      },
    ],
    name: "setDefaultRightsCodes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "delegationContainer_",
        type: "address",
      },
    ],
    name: "setDelegationContainer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "delegationFeePercentage_",
        type: "uint32",
      },
    ],
    name: "setDelegationFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "delegationRegisterFee_",
        type: "uint96",
      },
    ],
    name: "setDelegationRegisterFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deleteNominalEth_",
        type: "uint256",
      },
    ],
    name: "setDeletionNominalEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count_",
        type: "uint256",
      },
    ],
    name: "setNNumberOfEthAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rightsIndex_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "rightsDescription_",
        type: "string",
      },
    ],
    name: "setProjectSpecificRightsCodes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "registerFee_",
        type: "uint256",
      },
    ],
    name: "setRegisterFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasuryAddress",
        type: "address",
      },
    ],
    name: "setTreasuryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rightsInteger",
        type: "uint256",
      },
    ],
    name: "TransferRights",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delivery_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "provider_",
        type: "uint256",
      },
    ],
    name: "updateDeliveryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "withdrawERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [],
    name: "activeEthAddresses",
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
        name: "queryAddress_",
        type: "address",
      },
      {
        internalType: "bool",
        name: "checkingHot_",
        type: "bool",
      },
    ],
    name: "addressIsAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "queryAddress_",
        type: "address",
      },
    ],
    name: "beneficiaryBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance_",
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
        name: "queryAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rightsIndex_",
        type: "uint256",
      },
    ],
    name: "beneficiaryBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance_",
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
        name: "queryAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "beneficiaryBalanceOf1155",
    outputs: [
      {
        internalType: "uint256",
        name: "balance_",
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
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rightsIndex_",
        type: "uint256",
      },
    ],
    name: "beneficiaryOf",
    outputs: [
      {
        internalType: "address",
        name: "beneficiary_",
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
        name: "cold_",
        type: "address",
      },
    ],
    name: "coldIsActiveOnRegister",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cold_",
        type: "address",
      },
    ],
    name: "coldIsLive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collectionOfferId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
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
    name: "containerToDelegationId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "contractToBalanceByRights",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "defaultRightsCodes",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delegationFeePercentage",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delegationId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delegationRegisterFee",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deletionNominalEth",
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
        name: "_receivedAddress",
        type: "address",
      },
    ],
    name: "getAddresses",
    outputs: [
      {
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        internalType: "address",
        name: "delivery",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isProxied",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "address",
        name: "queryAddress_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rightsIndex_",
        type: "uint256",
      },
    ],
    name: "getBalanceByRight",
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
        name: "tokenContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rightsIndex_",
        type: "uint256",
      },
    ],
    name: "getBeneficiaryByRight",
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
        name: "container_",
        type: "address",
      },
    ],
    name: "getDelegationIdForContainer",
    outputs: [
      {
        internalType: "uint64",
        name: "delegationId_",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeeDetails",
    outputs: [
      {
        internalType: "uint96",
        name: "delegationRegisterFee_",
        type: "uint96",
      },
      {
        internalType: "uint32",
        name: "delegationFeePercentage_",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "queryAddress_",
        type: "address",
      },
    ],
    name: "getProxyRecordForAddress",
    outputs: [
      {
        internalType: "enum IEPSProxyRegister.ProxyStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "hot",
        type: "address",
      },
      {
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        internalType: "address",
        name: "delivery",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "feePaid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cold_",
        type: "address",
      },
    ],
    name: "getProxyRecordForCold",
    outputs: [
      {
        internalType: "enum IEPSProxyRegister.ProxyStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "hot",
        type: "address",
      },
      {
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        internalType: "address",
        name: "delivery",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "feePaid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hot_",
        type: "address",
      },
    ],
    name: "getProxyRecordForHot",
    outputs: [
      {
        internalType: "enum IEPSProxyRegister.ProxyStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "hot",
        type: "address",
      },
      {
        internalType: "address",
        name: "cold",
        type: "address",
      },
      {
        internalType: "address",
        name: "delivery",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "provider_",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "feePaid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRightsCodes",
    outputs: [
      {
        internalType: "string[16]",
        name: "rightsCodes_",
        type: "string[16]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenContract_",
        type: "address",
      },
    ],
    name: "getRightsCodesByTokenContract",
    outputs: [
      {
        internalType: "string[16]",
        name: "rightsCodes_",
        type: "string[16]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hot_",
        type: "address",
      },
    ],
    name: "hotIsActiveOnRegister",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hot_",
        type: "address",
      },
    ],
    name: "hotIsLive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hot_",
        type: "address",
      },
      {
        internalType: "address",
        name: "cold_",
        type: "address",
      },
      {
        internalType: "address",
        name: "delivery_",
        type: "address",
      },
    ],
    name: "isValidAddresses",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "container_",
        type: "address",
      },
    ],
    name: "isValidContainer",
    outputs: [
      {
        internalType: "uint64",
        name: "recordId_",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "offerIdToOfferDetails",
    outputs: [
      {
        internalType: "address",
        name: "offerMaker",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "delegationDuration",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "expiry",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "collectionOffer",
        type: "bool",
      },
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "offerAmount",
        type: "uint96",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "delegateRightsInteger",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "paymentERC20",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "proxyRegisterFee",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenContractToRightsCodes",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenToDelegationRecord",
    outputs: [
      {
        internalType: "uint64",
        name: "delegationId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "endTime",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delegateRightsInteger",
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
    inputs: [],
    name: "treasury",
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
        name: "",
        type: "address",
      },
    ],
    name: "validERC20PaymentOption",
    outputs: [
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
      {
        internalType: "uint96",
        name: "registerFee",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]
