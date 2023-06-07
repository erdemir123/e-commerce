export class Login{
    navigate(text:string){
        cy.visit(text)
    }
    username(){
        cy.get("#user-name").clear().type("standard_user")
    }
    password(){
        cy.get("#password").clear().type("secret_sauce")
        
    }
    title(text:string){
        cy.title().should("eq", text);
    }
    loginBtn(){
        cy.get("#login-button").type("submit")
    }
    
}
