describe('it should pass', function(){
  it('is good', function(){
    expect(window.jspec.letContext('test param')).toBe('letContext function called with test params');
  });
});
