/// <reference types="cypress" />

describe("Set favorites test", () => {
	beforeEach(() => {
		cy.visit("/portfolio");
	});

	it("can add one item to favorites", () => {
		cy.wait(4000);
		cy.get("li.tag.reset").should("not.exist");
		cy.get(
			':nth-child(2) > .opties > .favorite > input[type="checkbox"]',
		).click();
		cy.get("button.tag.reset").should("exist");
	});
});

export {};
