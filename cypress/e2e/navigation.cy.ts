import { Login } from "../PageObject/Login";
const login = new Login();

describe("tarayıcıda ileri geri kullanımı", () => {
  it("cypress.io sitesine git Product butonuna tıkla sonra geri ve ileri komutalırını kullan", () => {
    login.navigate("https://www.cypress.io/");
    login.title(
      "JavaScript Component Testing and E2E Testing Framework | Cypress"
    );
    cy.get("#dropdownProduct").type("button").click();
    login.title(
      "JavaScript Component Testing and E2E Testing Framework | Cypress"
    );
    cy.wait(5000)
    cy.get("h1").should("be.visible").should("have.css", "font-size", "48px");
    cy.go("back");
    login.title(
      "JavaScript Component Testing and E2E Testing Framework | Cypress"
    );
  });
});
