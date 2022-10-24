
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
  expect(obj).to.be.deep.equal({ a: 1, b: 2 });
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