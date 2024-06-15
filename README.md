Flash Loan Arbitrage on dex A and dex B on Aave.
================================================
Take a USDC Flash Loan from Aave.
USDC/DAI price at DEX A > Dex B.
Sell USDC Buy DAI at Dex A.
Sell DAI Buy USDC at Dex B.
Return Amount + Fees.
Withdraw profit.
Setup: 1.Hardhat,Remix IDE,VS Code. 2.Install Aave Core V3,ethersjs,openzeppelin depencies.

Smartcontracts:

FlashLoan.sol requestFlashLoan() executeOperation()

FlashLoanArbitrage.sol

depositUSDC(); buyDAI(); depositDAI(); sellDAI();

approveUSDC() allowanceUSDC() approveDAI() allowanceDAI()

Dex.sol implements

depositUSDC() depositDAI(); buyDAI(); sellDAI();

dexA-dexB-AAVE/aave-flash-loan-v3/README.md at master · CryptoArbitrageBots/dexA-dexB-AAVE
