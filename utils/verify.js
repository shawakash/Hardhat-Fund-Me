const { run } = require("hardhat");
const { modules } = require("web3");

async function verify(contractAddress, args) {
    console.group("Verifying Contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log(`Already Verified`);
        } else {
            console.log(e);
        }
    }
}

module.exports = { verify };