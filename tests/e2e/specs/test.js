describe("Agile principles", () => {
  it("number of current active principle should be 1", () => {
    cy.visit("http://localhost:8080/");

    cy.get(".content .item-body")
      .its("length")
      .should("be.eq", 1);
  });
});
