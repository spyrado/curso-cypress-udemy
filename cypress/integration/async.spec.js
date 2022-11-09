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
    //FORMA ERRADA, NÃO VAI FUNCIONAR EM CASOS ASYNCRONOS COM FIND
    // cy.get('#lista li')
    //   .find('span')
    //   .should('contain', 'Item 1');
    // cy.get('#lista li')
    // .find('span')
    // .should('contain', 'Item 2');

    // A MELHOR FORMA SERIA SELECIONAR tudo e ver se contem oq vc precisa, para mais infos no markdown do cypress
    // eu explico melhor sobre busque por: "Find Solo E Find Com Async (Com async não é interessante vou explicar o pq)"
    cy.get('#lista li span', { timeout: 6000 })
      .should('contain', 'Item 2');
  });
});