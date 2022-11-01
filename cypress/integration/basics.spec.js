/// <reference types="Cypress" />

describe('Cypress basics', () => {
  
  beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
  });

  it('should visit a page and assert a title', () => {
    cy.pause();
    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contains', 'Campo');
      // .and('contains', 'Campo');
  });

  it('should click on button and assert the text', () => {
    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!');
  });
});