/// <reference types="Cypress" />

describe('Helpers...', () => {
  
  it('Wrap objeto', () => {
    var objetoNormal = { nome: 'Nicolas' };
    cy.wrap(objetoNormal).should('have.property', 'nome', 'Nicolas')
  });

  it('Wrap DOM Elements', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('#formNome').then($el => {
      cy.wrap($el).type('Testando o type com wrap');
    })
  });

  it('Wrap de promise customizada', () => {
    
    const promiseCustom = new Promise((resolve, reject) => {
      setTimeout(() => resolve(10), 500);
    });
    // maneira sem wrap que loga errado
    // cy.get('#buttonSimple').then(() => console.log('Executei primeiro'));
    // promiseCustom.then((result) => console.log(result));
    // cy.get('#buttonList').then(() => console.log('Executei terceiro'));

    // maneira correta
    cy.get('#buttonSimple').then(() => console.log('Executei primeiro'));
    cy.wrap(promiseCustom).then((result) => console.log(result));
    cy.get('#buttonList').then(() => console.log('Executei terceiro'));
  });

  it('Its', () => {
    var objetoNormal = { nome: 'Nicolas' };

    cy.wrap(objetoNormal).its('nome').should('be.equal', 'Nicolas');
  });
});