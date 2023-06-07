describe("template spec", () => {
  it("passes", () => {
    cy.viewport("macbook-15");
    cy.visit("");
    cy.contains("Login To See Discounts and Buy").click();

    cy.get("button").scrollIntoView().click();
    cy.request("GET", "/api/auth/signin/google").then((response) => {
      expect(response.status).to.equal(200);
    });
    cy.get("#login").should(
      "have.css",
      "background-color",
      "rgb(17, 163, 127)"
    );
    cy.get("#img").should(
      "have.attr",
      "src",
      "/_next/image?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSofGI77Cz3tXbKTReFuM-Gqlp88zXT4Rgm6A%26usqp%3DCAU&w=640&q=75"
    );
  });
});
