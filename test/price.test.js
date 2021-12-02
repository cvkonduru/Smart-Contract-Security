// Test cases for testing the access control flaws in AgreedPrice contract.


const { inputToConfig } = require("@ethereum-waffle/compiler");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Access Control", () => {
  let owner, attacker;

  beforeEach( async () => {
    [owner, attacker] = await ethers.getSigners();

    const AgreedPrice = await ethers.getContractFactory("AgreedPrice", owner);
    this.agreedPrice = await AgreedPrice.deploy(1000);
  });

  it("Should should set price at deployment", async () => {
    expect(await this.agreedPrice.price()).to.eq(1000);
  });

  it("Should be possible for anyone to change the price", async () => {
     await this.agreedPrice.connect(attacker).updatePrice(10000);

     expect(await this.agreedPrice.price()).to.eq(10000)
  })

 

});