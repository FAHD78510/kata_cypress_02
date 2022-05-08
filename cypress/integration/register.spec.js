/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
import {demoBlazeLocator} from '../helpers/locators'
let username = faker.name.firstName();
let password = faker.internet.password();

describe("Inscription", () => {
  before(function () {
    
    cy.visit("https://www.demoblaze.com/");
    cy.get(demoBlazeLocator.signupButton).click();
    cy.get("#signInModal").should("be.visible")
  });
  it("Scenario 1 passant", () => {
    //cy.wait(2000)
    cy.get("#sign-username").should("be.visible").type(username);
    cy.get("#sign-password").should("be.visible").type(password);
    //cy.get("#signInModal").parent().children().eq(1);
    cy.get("#signInModal").find(".btn-primary").click();
  });
});
