describe("sauceDemo Login sayfası test", () => {
  beforeEach(() => {
    cy.viewport("iphone-8");
  });
  it("başarısız login", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    cy.title().should("eq", "Swag Labs");
    cy.get("#user-name").type("standard_user"); //usermname
    cy.get("#password").type("secret_sae"); //password
    cy.get("#login-button").type("submit"); //click btn
    cy.get("h3").contains(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  it("başarılı login", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    cy.title().should("eq", "Swag Labs");
    cy.get("#user-name").clear().type("standard_user"); //usermname
    cy.get("#password").clear().type("secret_sauce"); //password
    cy.get("#login-button").type("submit"); //click btn
    cy.get(".app_logo"); //SwagLags giriş başarılı
  });

  it("custom command deneme başarılı login", () => {
    cy.fixture("userData").as("user");
    cy.get("@user").then((user: any) => {
      cy.giris(user.websiteName);
      cy.login(user.username, user.password);
    });
  });
});
