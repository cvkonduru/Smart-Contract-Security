// Test cases for testing the access control with require statement in AgreedPrice contract.


const { inputToConfig } = require("@ethereum-waffle/compiler");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Access Control", () => {
  let owner, attacker;

  beforeEach( async () => {
    [owner, attacker] = await ethers.getSigners();

    const AgreedPrice = await ethers.getContractFactory("AgreedPricewithRequireAccessControl", owner);
    this.agreedPrice = await AgreedPrice.deploy(1000);
  });

  it("Should set the price at deployment", async () => {
    expect(await this.agreedPrice.price()).to.eq(1000);
  });

  it("Should set the deployer account as the owner at deployment", async () => {
    expect(await this.agreedPrice.owner()).to.eq(owner.address);
  });

  it("Should be possible for the owner to change price", async () => {
    await this.agreedPrice.updatePrice(10000);
    expect(await this.agreedPrice.price()).to.eq(10000);
  });
  
  it("Should not be possible for other than the owner to change price", async () => {
    await expect(this.agreedPrice.connect(attacker).updatePrice(10000)).to.be.revertedWith("Restricted Access");
  });

});
