import calculate from '../../logic/calculate';
import operate from '../../logic/operate';

describe('Testing Calculate', () => {
  it('Testing AC', () => {
    const object = { total: '', next: '', operation: '' };
    const buttonName = 'AC';
    const answer = calculate(object, buttonName);
    expect(answer).toEqual({ total: null, next: null, operation: null });
  });

  it('Testing addition', () => {
    const object = { total: '50', next: '5', operation: '+' };
    const buttonName = '=';
    const answer = calculate(object, buttonName);
    expect(answer).toEqual({ total: '55', next: null, operation: null });
  });

  it('Testing Substraction', () => {
    const object = { total: '100', next: '150', operation: '-' };
    const buttonName = '=';
    const answer = calculate(object, buttonName);
    expect(answer).toEqual({ total: '-50', next: null, operation: null });
  });

  it('Testing 0', () => {
    // Testing the second conditional if next is 0 and button is 0
    // calculator should return an empty object
    const object = { total: '', next: '0', operation: '' };
    const buttonName = '0';
    const answer = calculate(object, buttonName);
    expect(answer).toEqual({});
  });

  it('Any if is not true', () => {
    // Testing return 43 to 46 if the object is not an object
    // and the button is a number 0
    const object = '0';
    const buttonName = '0';
    const answer = calculate(object, buttonName);
    expect(answer).toEqual({ next: '0', total: null });
  });
});

describe('Testing Operate', () => {
  it('test Plus', () => {
    const number1 = '58';
    const number2 = '100';
    const operation = '+';

    const answer = operate(number1, number2, operation);
    expect(answer).toBe('158');
  });

  it('test times', () => {
    const number1 = '1586858555';
    const number2 = '10000';
    const operation = 'x';

    const answer = operate(number1, number2, operation);
    expect(answer).toBe('15868585550000');
  });

  it('test divition by 0', () => {
    const number1 = '55';
    const number2 = '0';
    const operation = '÷';

    const answer = operate(number1, number2, operation);
    expect(answer).toBe("Can't divide by 0.");
  });

  it('test divition by 5', () => {
    const number1 = '5000';
    const number2 = '5';
    const operation = '÷';

    const answer = operate(number1, number2, operation);
    expect(answer).toBe('1000');
  });

  it('test mob operator', () => {
    // it is not the percentaje is the mob or the recidual
    const number1 = '18';
    const number2 = '5';
    const operation = '%';

    const answer = operate(number1, number2, operation);
    expect(answer).toBe('3');
  });
});
