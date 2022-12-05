/// <reference types="Cypress" />

describe('Cypress basics', () => {
  
  beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
  });

  it('should visit a page and assert a title', () => {
    let syncTitle = '';

    cy.title()
      .then(title => {
        console.log(title);
        cy.get('[data-cy=dataSobrenome]').type(title);
        syncTitle = title;
      });

    // Como é asyncrono o comando acima devemos utilizar sempre o CYPRESS 

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contains', 'Campo');
      
    
  });

  it('should click on button and assert the text', () => {
    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!');
  });
});