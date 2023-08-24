const hre = require("hardhat");
const tokenAbi= require("../artifacts/contracts/NFTCollection1.sol/MyNFT.json");
require("dotenv").config();

const tokenAddress=process.env.CONTRACT_ADDRESS;
const abi = tokenAbi.abi;



async function main(){
    const token = await hre.ethers.getContractAt(abi,tokenAddress);
    for( let i=0;i<5;i++){
        try{
        const tx = await token.mintNFT();
        await tx.wait();
        console.log("Nft Minted: "+i);}catch(e){console.log(e);}
    }
}
main().catch((error)=>{

    console.error(error);
    process.exitCode=1;
})