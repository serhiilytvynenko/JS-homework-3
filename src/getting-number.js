'use strict';
function buildExpression(target, expression = '') {
  if (target === 0) {
    return expression;
  }
  if (target >= 5) {
    const targetExpression = buildExpression((target - 5), expression + ' + 5 * 1');
    {
      return targetExpression;
    }
  }
  if (target >= 3) {
    const targetExpression = buildExpression(target - 3, expression + ' + 3 * 1'); 
    {
      return targetExpression;
    }
  }
  if (target > 0) {
    const targetExpression = buildExpression(target - 1, expression + ' + 1 * 1');
    {
      return targetExpression;
    }
  }
  return 'Невозможно получить число';
}

const targetNumber = -15;
const result = buildExpression(targetNumber);

console.log(`Для получения числа ${targetNumber} нужно${result}`);
