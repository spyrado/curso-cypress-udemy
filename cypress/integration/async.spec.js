/// <reference types="Cypress" />

describe('Async', () => {
  
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
  });
  
  beforeEach(() => {
    cy.reload();
  });

  it('Deve aguardar o elemento estar disponivel', () => {
    cy.get('#novoCampo').should('not.exist');
    cy.get('#buttonDelay').click();
    cy.get('#novoCampo').should('not.exist');
    cy.get('#novoCampo').should('exist');
    cy.get('#novoCampo').type('alguma coisa')
  });

  it('Deve fazer retrys', () => {
    cy.get('#buttonDelay').click();
    cy.get('#novoCampo')
      .should('not.exist')
      .should('exist');
  });

  it.only('Find', () => {
    cy.get('#buttonList').click();
    // cy.get('#lista li')
    //   .find('span')
    //   .should('contain', 'Item 1');
    // cy.get('#lista li')
    // .find('span')
    // .should('contain', 'Item 2');

    cy.get('#lista li span', { timeout: 6000 })
      .should('contain', 'Item 2');
  });
});