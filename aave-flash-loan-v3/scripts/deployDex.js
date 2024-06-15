const hre = require("hardhat");

async function main() {

    console.log("before getcontractfactory");
    const Dex = await hre.ethers.getContractFactory("Dex");

    const dex = await Dex.deploy();

    await dex.waitForDeployment();

    console.log("DEX is deployed at address:", await dex.getAddress())

}

main().catch((error) => {
    console.error("Hello5" + error);
    process.exitCode = 1;
});
