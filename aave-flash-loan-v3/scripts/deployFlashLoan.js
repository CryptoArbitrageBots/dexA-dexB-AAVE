const hre = require("hardhat");

async function main() {

    console.log("before getcontractfactory");
    const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");

    const flashLoan = await FlashLoan.deploy("0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A");

    await flashLoan.waitForDeployment();

    console.log("FlashLoan is deployed at address:", await flashLoan.getAddress())

}

main().catch((error) => {
    console.error("Hello5" + error);
    process.exitCode = 1;
});
