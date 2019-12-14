import { Given } from 'cypress-cucumber-preprocessor/steps';

Given(/^game started$/, () => {
  cy.visit('');
  cy.url().should('contains', 'http://localhost:8090');
});
