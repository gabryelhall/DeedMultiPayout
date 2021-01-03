// const fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");

const secret = "input clean agent veteran flee ivory derive patient pole near argue pause"


module.exports = {
  networks: {
    ropsten: {
      provider: () => 
        new HDWalletProvider(secret,"https://ropsten.infura.io/v3/0a45b89a432f436b9e728aac24db48d0"
        ),
        network_id: '3'
    } 
  }
};