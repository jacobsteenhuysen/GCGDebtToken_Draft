pragma solidity ^0.4.24;
import "./BasicTokenMock.sol";
import "../token/ERC1404/GCGDebtToken.sol";

contract GCGDebtTokenMock is BasicTokenMock, GCGDebtToken {
    constructor (address initialAccount, uint256 initialBalance)
      BasicTokenMock(initialAccount, initialBalance)
      public
    {

    }
}