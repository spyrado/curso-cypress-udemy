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

  it('Find', () => {
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

  it('Uso do timeout', () => {
    cy.get('#buttonListDOM').click();
    cy.get('#lista li span', { timeout: 6000 })
      .should('contain', 'Item 2');
  });

  it.only('Click não tem retry', () => {
    cy.get('#buttonCount')
      .click()
      .should('have.value', '11'); // se eu colocar 111 aqui o click não vai ficar clicando até que atenda a condição

  });

  it.only('Then vs Should', () => {
    cy.get('#buttonListDOM').click();
    cy.get('#buttonListDOM').then($el => {
      console.log($el);
      // expect($el).to.have.length(1);
    })
    .and('have.id', 'buttonListDOM')

    // cy.get('#lista li span').should($el => {
    //   console.log($el);
    //   expect($el).to.have.length(2);
    // });
  });
});