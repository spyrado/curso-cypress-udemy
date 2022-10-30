/// <reference types="Cypress" />

describe('Cypress basics', () => {
  
  it('should visit a page and assert a title', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.title().should('be.equal', 'Campo de Treinamento');
  });
});