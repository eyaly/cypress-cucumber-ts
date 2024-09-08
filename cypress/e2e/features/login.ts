import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("index.html");
});

When("I submit my credentials", () => {
  cy.get("#user-name").type("standard_user");  // Using the id selector for the username
  cy.get("#password").type("secret_sauce");  
  cy.get("#login-button").click();
});

Then("I should see the dashboard", () => {
  cy.url().should("include", "inventory");
});