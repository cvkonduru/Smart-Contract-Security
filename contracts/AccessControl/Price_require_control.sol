// SPDX-License-Identifier: MIT

/* Mitigate the access control issue by adding a require statement to check that function caller should be owner of the contract */

pragma solidity 0.8.9;

/** @title Agreed Price. */
contract AgreedPricewithRequireAccessControl {
  address public owner;
  uint256 public price;

  constructor(uint256 _price) {
    owner = msg.sender;
    price = _price;
  }
  /** @dev update the price state variable 
    * @param _price Price feed from the caller
  */
  function updatePrice(uint256 _price) external {
    require(msg.sender == owner, "Agreed Price: Restricted Access");
    price = _price;
  }

}