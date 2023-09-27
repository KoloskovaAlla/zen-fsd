import { validateEmail } from './validateEmail';

const dataForTests = {
  test1: {
    email: 'fsdrty@mail.ru',
    expectedValidity: true
  }
};

describe('validateEmail:', () => {
  it('Unit test 1', () => {
    const { email, expectedValidity } = dataForTests.test1;    
    const validity = validateEmail(email);
    expect(validity).toEqual(expectedValidity);
  });
});