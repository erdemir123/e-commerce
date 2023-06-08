describe("api test", () => {
  it("headers doğrulama testi-1", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/1")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");
  });
  it("headers doğrulama testi-2", () => {
    cy.request({
      url: "https://pokeapi.co/api/v2/pokemon/1",
      method: "GET",
    }).then((res: any) => {
      expect(res.body).to.be.include({ name: "bulbasaur" });
    });
  });
  it.skip("post ile auth", () => {
    cy.request({
      url: "url",
      method: "Post",
      auth: { username: "test", password: "test123" },
    }).then((res: any) => {
      expect(res.status).to.eq(200);
    });
  });
  it("status doğrulama testi-2", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/1")
      .its("status")
      .should("eq", 200);
  });
  it("body doğrulama testi-2", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/1")
      .its("body")
      .should("include", { name: "bulbasaur" });
  });
});
