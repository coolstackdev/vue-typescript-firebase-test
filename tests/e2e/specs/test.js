describe("Agile principles", () => {
  it("number of principles should be 12", () => {
    cy.visit("http://localhost:8080/");

    cy.get(".item-body")
      .its("length")
      .should("be.eq", 12);
  });
});
