# NFT Bridge using FXPortal

This project demonstrates the use of the FXPortal bridge to transfer ERC721 NFTs from the Ethereum Goerli testnet to the Polygon Mumbai testnet.

## Overview

This project includes a Solidity smart contract that mints ERC721 NFTs on the Ethereum Sepolia testnet. These NFTs are then transferred to the Polygon Mumbai testnet using the FXPortal bridge.

## Usage

1. Fork this repository and clone it to your local machine.
2. Run `npm install` to install all dependencies.
3. Deploy the smart contract on the Ethereum Goerli testnet using the `deploy.js` script.
4. Mint five ERC721 NFTs using the `mint.js` script.
5. Transfer the NFTs to the Polygon Mumbai testnet using the FXPortal bridge using the `approveDeposit.js` script.
6. You can then check the balance of the polygon contract to verify the transfer using the `getBalance.js` script.

## For Developers

This is a Hardhat project with four scripts. To run a script, use the following command:



```shell
npx hardhat run scripts/<scriptName> --network <networkName>
```
## License

This project is licensed under the MIT License.
