# dexA-dexB-AAVE
Ethereum Flash Loan Arbitrage Appication using Aave platform.

Flash Loan Arbitrage app on dex A and dex B on Aave.

Take a USDC Flash Loan from Aave.
USDC/DAI price at DEX A > Dex B.
Sell USDC Buy DAI at Dex A.
Sell DAI Buy USDC at Dex B.
Return Amount + Fees.
Withdraw profit.

Setup:
1.Hardhat,Remix IDE,VS Code.
2.Install Aave Core V3,ethersjs,openzeppelin depencies.

Smartcontracts:

FlashLoan.sol
requestFlashLoan()
executeOperation()

FlashLoanArbitrage.sol

depositUSDC();
buyDAI();
depositDAI();
sellDAI();

approveUSDC()
allowanceUSDC()
