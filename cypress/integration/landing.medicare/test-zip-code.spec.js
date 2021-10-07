describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://medicare.local.healthcare.com:3000/medicare/landing/");
  });

  it("Test the landing page zip code", () => {
    cy.get("#zipcodeInput").type("90210").should("have.value", "90210");
    cy.get("#zipcodeInput").clear();
    cy.get("#zipcodeInput").type("00000").should("have.value", "00000");
  });
});
