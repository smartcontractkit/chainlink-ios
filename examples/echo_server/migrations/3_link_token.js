let LinkToken = artifacts.require('linkToken/contracts/LinkToken.sol')

module.exports = function (deployer) {
  deployer.deploy(LinkToken)
}
