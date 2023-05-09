/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      hideHomeElements(): Chainable<Subject>;
    }
  }
  