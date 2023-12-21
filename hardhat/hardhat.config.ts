import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
    fhe: {
      url: `https://rpc.ankr.com/zetachain_evm_athens_testnet`,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};

export default config;
