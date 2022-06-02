/// <reference types="cypress" />

describe("Homepage tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays shows expected h1 title", () => {
    cy.get("h1").should("have.text", "Nick Spaargaren");
  });
});

export {};
