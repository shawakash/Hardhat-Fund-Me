

// function deployFunc(hre) {
//     console.log("Hola, Buenos Nias.😇");
// }

// module.exports.default = deployFunc;
const { networkConfig, deploymentChain } = require("../helper-hardhart-config");
const { network } = require("hardhat");
const { verify } = require("../utils/verify");
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = async ({getNamedAccounts, deployments}) => {    //  similar to hre.deployed similar to require()
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;
    
    let ethUsdPriceFeedAddress;
    if (deploymentChain.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUsdAggregator.address;
    } else {
        console.log("Hola, Buenos Nias.😇");
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
    }
    const args = [ethUsdPriceFeedAddress];
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: network.config.blockConfirmations || 1
    })
    log(`FundMe deployed at ${fundMe.address}`)

    if (
        !deploymentChain.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        //await verify(fundMe.address, [ethUsdPriceFeedAddress])
    }
        log("----------------------------------------------------------------------------------------");
    
};