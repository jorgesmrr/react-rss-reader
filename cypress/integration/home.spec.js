describe("Lists", () => {
  it("add a feed", () => {
    cy.visit("/");

    cy.get("[data-test=add-feed-action]").click();

    cy.get("[data-test=add-feed-form-url] input").type(
      "https://hipsters.tech/feed/podcast/"
    );

    cy.get("[data-test=add-feed-submit]").click();
  });
});
