/// <reference types="cypress" />

describe("ajout au panier", ()=>{
    before(function () {
        cy.visit("https://www.demoblaze.com/");
        
      });
      it("ajout au panier d'un telephone", ()=>{
        
      cy.get(".container")
      .find(".list-group-item")
      .eq(1)
      .should("include.text", "Phones")
      .click();
    cy.wait(1000);
    cy.get(".row").find(".hrefch").eq(0).click();
    cy.get(".name").should("contain.text", "Samsung galaxy s6");
    cy.get(".row").find(".btn").click();
    cy.on("window:alert", (Text) => {
      expect(Text).contain("Product added");
    });
    cy.on("window:confirm", () => true);
   
    
      })
      it("paiement", () => {
        cy.get("#cartur").click();
        cy.get("#page-wrapper")
          .find(".btn")
          .should("include.text", "Place Order")
          .click();
        cy.wait(1000);
        cy.get("#name").should("be.visible").type("pierrot");
        cy.get("#country").should("be.visible").type("France");
        cy.get("#city").should("be.visible").type("triel");
        cy.get("#card").should("be.visible").type("visa");
        cy.get("#month").should("be.visible").type("04");
        cy.get("#year").should("be.visible").type("2023");
        cy.get("#orderModal")
          .find(".btn-primary")
          .should("include.text", "Purchase")
          .click();
        cy.get(".sweet-alert").should(
          "include.text",
          "Thank you for your purchase!"
        );
      });
})