var reportABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_eventType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_eventDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_timeIncident",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateIncident",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_timeReport",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateReport",
				"type": "string"
			}
		],
		"name": "_newClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_state",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_zipCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_country",
				"type": "string"
			}
		],
		"name": "_newInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "newClaim",
		"outputs": [
			{
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eventDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "timeIncident",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateIncident",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "timeReport",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateReport",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "newInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "state",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "zipCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "newReport",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "priv",
		"outputs": [
			{
				"internalType": "string",
				"name": "firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DOB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "race",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_DOB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_race",
				"type": "string"
			}
		],
		"name": "privInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "reportToOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "reports",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "state",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "zipCode",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "country",
						"type": "string"
					}
				],
				"internalType": "struct PoliceContract.Info",
				"name": "info",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "eventType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "eventDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "timeIncident",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateIncident",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "timeReport",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateReport",
						"type": "string"
					}
				],
				"internalType": "struct PoliceContract.Claim",
				"name": "claim",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "gender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "DOB",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "race",
						"type": "string"
					}
				],
				"internalType": "struct PoliceContract.PrivInfo",
				"name": "priv",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
