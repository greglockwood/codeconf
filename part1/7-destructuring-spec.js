"use strict";
const { expect } = require("chai");

describe("destructuring", () => {
  it("allows us to name parts of arrays as variables", () => {
    const person = ["Bob", "W", "Smith"];
    let firstName;
    let lastName;
    expect(firstName).to.equal("Bob");
    expect(lastName).to.equal("Smith");
  });

  it("allows us to assign properties to renamed variables", () => {
    const person = {
      address: "123 Something road",
      firstName: "Bob",
      lastName: "Smith",
    };
    let first;
    let last;
    expect(first).to.equal("Bob");
    expect(last).to.equal("Smith");
  });

  it("allows us to assign deep properties into variables", () => {
    const person = {
      address: { number: "123", street: "Something road" },
      firstName: "Bob",
      lastName: "Smith",
    };
    let streetNumber;
    let streetName;
    expect(streetName).to.equal("Something road");
    expect(streetNumber).to.equal("123");
  });
});
