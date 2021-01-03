const DeedMultiPayout = artifacts.require("DeedMultiPayout");

module.exports = function(deployer, _network, accounts) {
  deployer.deploy(DeedMultiPayout, accounts[0], accounts[0x08f931602b16a53b1b5b0e23cfc5c5c349c7f31c
  ], 1, {value: 100});
};
