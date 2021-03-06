// SPDX-License-Identifier: MIT

/* Problem with this contract is that there is no access control to set the agreed price and any body can update the 
   price */

pragma solidity 0.8.9;

/** @title Agreed Price. */
contract AgreedPrice {
  uint256 public price;

  constructor(uint256 _price) {
    price = _price;
  }
  /** @dev update the price state variable 
    * @param _price Price feed from the caller
  */
  function updatePrice(uint256 _price) external {
    price = _price;
  }

}