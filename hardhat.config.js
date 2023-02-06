require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("./tasks/accounts");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL ||
  "https://eth-goerli.alchemyapi.io/v2/lPdXaEgRPm7qBT3KflWvBXRTQHFYlwF_";
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKET = process.env.COINMARKET;

module.exports = {
    defaultNetwork: "hardhat",
    
    networks: {
        hardhat: {},
        goerli: {
            url:
                "https://eth-goerli.g.alchemy.com/v2/lPdXaEgRPm7qBT3KflWvBXRTQHFYlwF_",
            accounts: [GOERLI_PRIVATE_KEY],
            chainId: 5,
            blockConfirmation: 6
        },
        localhost: {
            url: `http://127.0.0.1:8545/`,
            // accounts: Thanks hardhat 😊!
            chainId: 31337
        }
    },
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.6.6" }]
    },
  etherscan: {
    apikey: {
      mainnet: ETHERSCAN_API_KEY,
      goerli: GOERLI_PRIVATE_KEY
    },
  },
    gasReporter: {
        enabled: true,
        outputFile: "gas-reporter.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKET
    },
    namedAccounts: {
        deployer: {
            default: 0
        },
        user: {
            default: 1
        }
    }
}
