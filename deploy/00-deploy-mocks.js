const { network } = require("hardhat");
const { DECIMALS, INITIAL_ANSWER } = require("../helper-hardhart-config");


module.exports = async ({ getNamedAccounts, deployments }) => {    //  similar to hre.deployed similar to require()
    console.log(
        "----------------------------------------------------------------------------------"
    );
    console.log("Hola, Buenos Nias.😇");
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    if (chainId == "31337") {
        log("Local Network Detected! Deployong Mocks 😇");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER]
        });
        log("Mocks Deployed! 😤");
        log("----------------------------------------------------------------------------------");
    }
};

module.exports.tags = ["all", "mocks"];