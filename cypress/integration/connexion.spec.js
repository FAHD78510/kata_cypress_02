/// <reference types="cypress" />

import { demoBlazeLocator } from "../helpers/locators";
describe("connexion", () => {
  before(function () {
    cy.visit("https://www.demoblaze.com/");
    cy.get(demoBlazeLocator.loginButton).click();
    cy.get("#logInModal").should("be.visible");
  });

it("connexion passant", () => {
  cy.get("#loginusername")
  .should("be.visible")
  cy.wait(1000)
  cy.get("#loginusername").type("pierrot");
  cy.get("#loginpassword")
  .should("be.visible")
  .type("azerty")
  cy.get("#logInModal").find(".btn-primary").click()
  cy.get("#nameofuser").should("be.visible").contains("Welcome pierrot")
});
});
