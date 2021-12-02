// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

contract AgreedPrice {
  uint256 public price;

  constructor(uint256 _price) {
    price = _price;
  }

  function updatePrice(uint256 _price) external {
    price = _price;
  }
}