require("@nomicfoundation/hardhat-toolbox");

//require('@nomiclabs/hardhat-waffle');
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();
//require('hardhat-deploy');

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
   
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.25"
      },
      {
        version: "0.8.10"
      },
      {
        version: "0.8.0"
      }


    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}

