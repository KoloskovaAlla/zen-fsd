import { validateTel } from './validateTel';

const dataForTests = {
  test1: {
    tel: '0123456789',
    expectedValidity: true
  },
  test2: {
    tel: '01234567890',
    expectedValidity: false
  },
  test3: {
    tel: '012345678',
    expectedValidity: false
  },
  test4: {
    tel: '012a456789',
    expectedValidity: false
  },
  test5: {
    tel: '012a456.89',
    expectedValidity: false
  },
};

describe('validateTel:', () => {
  it('Unit test 1', () => {
    const { tel, expectedValidity } = dataForTests.test1;
    const validity = validateTel(tel);
    expect(validity).toEqual(expectedValidity);
  });
  it('Unit test 2', () => {
    expect(validateTel('0123')).toEqual(false);
  });
  it('Unit test 3', () => {
    const { tel, expectedValidity } = dataForTests.test3;
    const validity = validateTel(tel);
    expect(validity).toEqual(expectedValidity);
  });
  it('Unit test 4', () => {
    const { tel, expectedValidity } = dataForTests.test4;
    const validity = validateTel(tel);
    expect(validity).toEqual(expectedValidity);
  });
  it('Unit test 5', () => {
    const { tel, expectedValidity } = dataForTests.test5;
    const validity = validateTel(tel);
    expect(validity).toEqual(expectedValidity);
  });
});
