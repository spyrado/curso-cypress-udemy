
/// <reference types="Cypress" />

it('Equality', () => {
  
  const a = 1;
  expect(a).to.be.equal(1);
  expect(a, 'Deveria ser 1').to.be.equal(1);
  expect(a).to.be.equal(1);
  expect(a).not.to.be.equal(2);
});
  
it('Equality for Objects', () => {
  
  const obj = {
    a: 1,
    b: 2
  };
  // essa é uma forma errada, pq o js entende que é outro objeto outra referencia, para isso devemos utilizar deep
  // expect(obj).to.be.equal({ a: 1, b: 2 });
  expect(obj).to.be.deep.equal({ a: 1, b: 2 }); // CERTA
  expect(obj).eql({ a: 1, b: 2 }); // SHORTCUT DE DEEP
  expect(obj).include({ a: 1 }); // VERIFICA SE EXISTE AQUELA PROP/VALUE DENTRO DO OBJ
  expect(obj).to.have.property('b')
  expect(obj).to.have.property('b', 2);
  expect(obj).not.be.empty;
  expect({}).to.be.empty;

});

it('Truthy', () => {
  const a = true;
  const b = null;
  const c = undefined;
  const d = '';

  expect(a).to.be.true;
  expect(b).to.be.null;
  expect(c).to.be.undefined;
  expect(d).to.be.empty;
});

it('Arrays', () => {

  const array = [1,2,3];

  expect(array).to.be.members([1,2,3]); // Deve possuir exatamente os mesmos numeros
  expect(array).to.include.members([1,3]); // Deve ter esses numeros dentro do array.
  expect(array).not.to.be.empty; // Nao deve estar vazio
  expect([]).to.be.empty; // Deve estar vazio
  expect([]).length(0); // variação de implementacao do deve estar vazio
  expect([1,2]).length.greaterThan(0); // deve ser maior que 0
});

it('Types', () => {
  
  const number = 1;
  const string = 'texto';
  const array = [];
  const object = {};

  expect(number).to.be.a('number');
  expect(string).to.be.a('string');
  expect(array).to.be.an('array');
  expect(object).to.be.an('object');
});

it('Strings', () => {
  
  const texto = 'Minha string xpto';

  expect(texto).to.be.equal('Minha string xpto'); // exatamente igual
  expect(texto).length(17) // tamanho da string
  expect(texto).contains('xpto'); // se existe dentro do texto xpto
  expect(texto).to.match(/ xpto$/g) // verifica se no final do texto tem espaço xpto
  expect(texto).to.match(/\w+$/g) // verifica se existe letras
});

it('Numbers', () => {
  
  const number = 4;
  const float = 4.2134;

  expect(number).to.be.equal(4);
  expect(number).to.be.above(3);
  expect(number).to.be.below(5);

  expect(float).to.be.equal(4.2134); // nem sempre um numero flutuante vamos esperar exatamente tantas casas após o ponto então utilizamos closeTo nesses casos
  /* Com o closeTo falamos que o numero deve ser PRÓXIMO a 4.2 e 
   o proximo parâmetro colocamos a variação que pode ocorrer para cima ou para baixo */
  expect(float).to.be.closeTo(4.2, 0.1); 

});