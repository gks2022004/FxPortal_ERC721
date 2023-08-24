const hre = require("hardhat");
const NFTJson = require("../artifacts/contracts/NFTCollection1.sol/MyNFT.json")

const NFtAddress ="0xAe46C4579EfA4A8c0E0781f72e9320e156683A1E";
const ContractABI = NFTJson.abi
const walletAddress="0x3B79bda90db2AF622FB698baB594D7843E660f0e";

async function main(){
    const Contract = await hre.ethers.getContractAt(ContractABI,NFtAddress);
    console.log("You have "+await Contract.balanceOf(walletAddress)+" NFTs")
}
main((error)=>{
    console.log(error);
    process.exitCode=1;
})