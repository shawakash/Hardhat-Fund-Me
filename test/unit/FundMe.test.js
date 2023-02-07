// Test file for Fund Me

const { assert, expect } = require("chai");
const { deployments, getNamedAccounts, ethers } = require("hardhat");
// Test file for Fund Me
describe("FundMe", function () { 
    let fundMe;
    let deployer;
    let mockV3Aggregator;
    beforeEach(async function () { 
        // deploying our contract
        // Using hardhat deploy
        // const accounts = await ethers.getSigner();
        // const accountsZero = accounts[0];

        deployer = await getNamedAccounts();
        await deployments.fixture(["all"]);
        fundMe = await ethers.getContract("FundMe", deployer);
        mockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer);
    });

    // describe("constructor", function () {
    //     it("sets the aggregator addresses correctly", async () => {
    //         const response = await fundMe.getPriceFeed();
    //         assert.equal(response, mockV3Aggregator.address);
    //     });
    // });

    // describe("fund", () => {
    //     it("False if you don't send enough eth", async () => {
    //         await expect(fundMe.fund()).to.be.revertedWith("You need to provide more eth!");
    //     });
    // });
});