/// <reference types="cypress" />

describe("Homepage tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays shows expected h1 title", () => {
    cy.get("h1").should("have.text", "Nick Spaargaren");
  });
});
