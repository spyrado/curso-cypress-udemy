/// <reference types="Cypress" />

describe('Helpers...', () => {
  it('Wrap objeto', () => {
    var objetoNormal = { nome: 'Nicolas' };
    cy.wrap(objetoNormal).should('have.property', 'nome', 'Nicolas');
  });

  it('Wrap DOM Elements', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('#formNome').then(($el) => {
      cy.wrap($el).type('Testando o type com wrap');
    });
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

  it('Its...', () => {
    // Acesso simples
    const objetoNormal = { nome: 'Nicolas' };
    cy.wrap(objetoNormal).its('nome').should('be.equal', 'Nicolas');

    // Mais de um its
    const objetoDentroDeObjeto = { nome: 'Nicolas', endereco: { rua: 'do fulano' } };
    cy.wrap(objetoDentroDeObjeto).its('endereco').its('rua').should('eq', 'do fulano');
    cy.wrap(objetoDentroDeObjeto).its('endereco.rua').should('eq', 'do fulano');

    // utilizando a pagina com its
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    // Toda pagina tem um titulo e como o título é uma string, podemos pegar o length dela
    cy.title().its('length').should('be.equal', 20);
  });

  it('Invoke...', () => {
    const getValue = () => 1;
    const soma = (a,b) => a+b;

    // função simples
    cy.wrap({ getValue }).invoke('getValue').should('be.equal', 1);

    // função com argumentos
    cy.wrap({ soma }).invoke('soma', 1,2).should('be.equal', 3);

    // utilizando a pagina com invoke e escrevendo um valor em um input
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('#formNome').invoke('val', 'Inputando texto com invoke');
    // Esse alert funciona o teste, porem o cypress mata imediatamente ele para não atrapalhar o fluxo de teste
    cy.window().invoke('alert', 'invokando alerta pelo invoke');

    // podemos pegar um elemento da tela e acessar qualquer propriedade JQuery e manipular esse elemento com o invoke
    cy.get('#resultado').invoke('html', '<input type="button" value="injetando html com invoke">');
  });
});
