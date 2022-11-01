/// <reference types="Cypress" />

describe('Work with basic elements', () => {
  
  beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
  });

  it('Text', () => {
    // cy.get('body').should('contain', 'Cuidado onde clica, muitas armadilhas...'); // Modo generico de pegar algo na tela ( nao gosto mt da ideia pois pode gerar bugs
    cy.get('.facilAchar', { timeout: 1000 }).should('have.text', 'Cuidado onde clica, muitas armadilhas..');
  });

});