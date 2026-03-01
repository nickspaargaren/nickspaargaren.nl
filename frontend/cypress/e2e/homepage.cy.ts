/// <reference types="cypress" />
import "cypress-html-validate/commands";

describe("Homepage tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays shows expected h1 title", () => {
    cy.get("h1").should("have.text", "Nick Spaargaren");
  });

  it("should have valid html", () => {
    cy.htmlvalidate();
  });
});

export {};
