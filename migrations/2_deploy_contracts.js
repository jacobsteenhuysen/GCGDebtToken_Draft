var GCGdebt = artifacts.require("/Users/jacobsteenhuysen/Documents/GCGDebtToken_Draft/contracts/token/ERC1404/GCGDebtToken.sol")
var MessagesAndCodes = artifacts.require('./libraries/MessagesAndCodes')
var IndivisibleTokenMock = artifacts.require('./mocks/IndivisibleTokenMock')
var BasicWhitelistTokenMock = artifacts.require('./mocks/BasicWhitelistTokenMock')
var ManagedWhitelistTokenMock = artifacts.require('./mocks/ManagedWhitelistTokenMock')
var MaxNumShareholdersTokenMock = artifacts.require('./mocks/MaxNumShareholdersTokenMock')
var SafeMathMock = artifacts.require('./mocks/SafeMathMock')

module.exports = function (deployer) {
  deployer.then(async () => {
    try {
      // deploy and link MessagesAndCodes lib for MessagedERC1404's
      await deployer.deploy(MessagesAndCodes)
      await deployer.link(MessagesAndCodes, [
        IndivisibleTokenMock,
        SafeMathMock,
        BasicWhitelistTokenMock,
        ManagedWhitelistTokenMock,
        MaxNumShareholdersTokenMock,
     
      ])
    } catch (err) {
      console.log(('Failed to Deploy Contracts', err))
    }
  })
}
