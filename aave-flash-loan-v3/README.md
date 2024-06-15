Flash Loan Arbitrage on dex A and dex B on Aave.
================================================

1. Take a USDC Flash Loan from Aave.
2. USDC/DAI price at DEX A  > Dex B.
3. Sell USDC Buy DAI at Dex A.
4. Sell DAI Buy USDC at Dex B.
5. Return Amount + Fees.
6. Withdraw profit.

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
approveDAI()
allowanceDAI() 

Dex.sol implements

depositUSDC() 
depositDAI();
buyDAI();
sellDAI();
