Ethereum Crypto Arbitrage Bot using Aave platform.
==================================================

1. Take a USDC Flash Loan from Aave.
2. USDC/DAI price at DEX A > Dex B.
3. Sell USDC Buy DAI at Dex A.
4. Sell DAI Buy USDC at Dex B.
5. Return Amount + Fees.
6. Withdraw profit.

Setup:
======

1. Hardhat,Remix IDE,VS Code.
2. Install Aave Core V3,ethersjs,openzeppelin depencies.
3. Smartcontracts.

FlashLoan.sol
=============
-requestFlashLoan()
-executeOperation()

FlashLoanArbitrage.sol
======================

-depositUSDC();
-buyDAI();
-depositDAI();
-sellDAI();
-approveUSDC()
-allowanceUSDC()

Steps to Run:
=============

1. git clone https://github.com/CryptoArbitrageBots/dexA-dexB-AAVE.git
2. open "https://remix.ethereum.org/"
3. upload folder dexA-dexB-AAVE
4. Compile Dex.sol
5. Deploy Dex.sol (Confirm transaction in Metamask.)
6. Copy Deployed address of Dex.sol to FlashLoanArbitrage.sol
7. Compile FlashLoanArbitrage.sol
8. Deploy FlashLoanArbitrage.sol (Confirm transaction in Metamask.)
9. Approve USDC 1000USDC (Confirm transaction in Metamask.)
10. Approve DAI 1200DAI (Confirm transaction in Metamask.)
11. Request Flash Loan 1000 USDC.
12. Program will take a Flash Loan of 1000 USDC, perform Arbitration Logic, return Flash Amount + premium.
13. Click Withdraw to withdraw profit.

thanks
Uday
