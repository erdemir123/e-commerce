import { Login } from "../PageObject/Login";
const login = new Login();

describe("cypress file upload and ", () => {
  // it("protocol kontrolü", () => {
  //   login.navigate("https://fineuploader.com");
  //   cy.location("protocol").should("contain", "https:");
  // });

  // it("png file upload", () => {
  //   cy.viewport(1500, 800);
  //   login.navigate("https://fineuploader.com");
  //   cy.wait(1000);
  //   cy.get("[name='qqfile']").attachFile({ filePath: "../../public/next.svg" });
  // });
  // it("hostname kontrolü", () => {
  //   login.navigate("fineuploader.com");
  //   cy.location("hostname").should("include", "fineuploader.com");
  // });

  // it("fineuploader sitesinde demo butonuna tıkla ghelen url verify et", () => {
  //   cy.viewport(1500, 800);
  //   login.navigate("https://fineuploader.com");
  //   cy.get("#menu > div > div > ul > li:nth-child(2) > a")
  //     .should("be.visible")
  //     .click();
  //   cy.location("pathname").should("eq", "/demos.html");
  // });

  it("fineuploader/demos sitesinde demo butonuna tıkla ghelen url verify et", () => {
    cy.viewport(1500, 800);
    login.navigate("https://fineuploader.com/demos.html");
    cy.get(
      "body > div.container.marketing.demo-list > div.row-fluid > div.span2.left > ul > li:nth-child(1) > a"
    )
      .should("be.visible")
      .click()
    // cy.location("pathname").should("eq", "demos.html#basic-setup");
    cy.url().should("contain","demos.html#basic-setup")
    cy.go("back")
    cy.url().should("contain","demos.html")
    cy.get("body > div.container.marketing.demo-list > div.row-fluid > div.span2.left > ul > li:nth-child(2) > a").should("be.visible").click()
    cy.url().should("contain","/demos.html#gallery-view")
  });
});
