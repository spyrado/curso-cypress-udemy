/// <reference types="Cypress" />

describe('Work with basic elements', () => {

  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
  });
  
  beforeEach(() => {
    cy.reload();
  });

  it('Text', () => {
    // cy.get('body').should('contain', 'Cuidado onde clica, muitas armadilhas...'); // Modo generico de pegar algo na tela ( nao gosto mt da ideia pois pode gerar bugs
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
  });

  it('Links', () => {
    cy.get('[href="#"]').click();
    cy.get('#resultado').should('have.text', 'Voltou!');
    cy.reload();
    cy.get('#resultado').should('have.not.text', 'Voltou!');
  });

  it('Inputs / TextAreas', () => {
    cy.get('#formNome').type('Cypress funcionando');
    cy.get('#formNome').should('have.value', 'Cypress funcionando');
    // Essa forma de selecionar um elemento é errada no cypress, ele considera : como caracter especial,
    // Para fazer com que ele considere o : devemos usar \\: 
    // cy.get('#elementosForm:sugestoes')
    cy.get('#elementosForm\\:sugestoes')
      .type('Lorem ipsum xD{selectAll}OutroTexto', { delay: 100 })
      .should('have.value', 'OutroTexto');

    cy.get('[data-cy=dataSobrenome]')
      .type('Teste12345{backspace}{backspace}')
      .should('have.value', 'Teste123');
  });

  it('Radio Buttons', () => {
    cy.get('#formSexoFem')
      .click()
      .should('be.checked');
    cy.get('#formSexoMasc')
      .should('be.not.checked');

    cy.get('#formSexoMasc')
      .click()
      .should('be.checked');
    cy.get('#formSexoFem')
      .should('be.not.checked');

    // Geralmente um radio button é composto por 2 ou mais items, e eles são agrupados pela propriedade name
    cy.get('[name="formSexo"]')
      .should('have.length', 2);
  });

  it('Checkbox', () => {
    cy.get('#formComidaPizza')
      .click()
      .should('be.checked');
    // como esse get vai retornar mais de um elemento eu tenho que informar ao evento de click q eu quero clicar em todos
    // passando o parametro multiple: true
    cy.get('[name=formComidaFavorita]')
      .click({ multiple: true });

    cy.get('#formComidaPizza')
      .should('be.not.checked');

      cy.get('#formComidaCarne')
        .should('be.checked');
  });

  it('Combo / Select', () => {
    cy.get('[data-test=dataEscolaridade]')
      .select('2o grau completo')
      .should('have.value', '2graucomp')
  });

  it('Combos / Multi Selects ', () => {
    cy.get('[data-testid=dataEsportes]')
      .select(['nada', 'natacao', 'Corrida'])
  });


});