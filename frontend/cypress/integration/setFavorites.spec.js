/// <reference types="cypress" />

describe("Set favorites test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/portfolio");
  });

  it("can add one item to favorites", () => {
    cy.get("li.tag.reset").should("not.exist");
    cy.get(":nth-child(2) > .opties > .favorite > .icon").click();
    cy.get("li.tag.reset").should("have.text", "Alle verwijderen");
  });
});
