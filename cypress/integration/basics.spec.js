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

    // preciso usar o then do cypress para utilizar o syncTitle, explico o pq na documentação cypress.md
    // de titulo: #3 Exemplo de uso de promises com async do js vs async do cypress
    cy.get('#formNome').then($el => {
      // não é muito bom digitar direto com jquery pq perdemos a rastreabilidade no exemplo abaixo eu fiz com cypress
      $el.val(syncTitle);
    });

    cy.get('#elementosForm\\:sugestoes')
      .then($el => {
        cy.wrap($el).type(syncTitle);
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