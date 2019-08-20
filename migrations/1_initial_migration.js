var Migrations = artifacts.require("./Migrations.sol");
var Demo=artifacts.require("./Demo.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Demo);
};
