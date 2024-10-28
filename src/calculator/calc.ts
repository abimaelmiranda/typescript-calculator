interface ICalculator {
  sum(...args: number[]): number;
  sub(...args: number[]): number;
  divide(...args: number[]): number;
  multiply(...args: number[]): number;
}

export default class Calculator implements ICalculator {
  private display: HTMLInputElement = document.querySelector(
    '.display',
  ) as HTMLInputElement;

  constructor() {
    this.setEvents();
  }

  setEvents(): void {
    document.addEventListener('click', (e) => {
      const el = e.target as HTMLInputElement;
      if (el.classList.contains('clear')) {
        this.clearDisplay();
        return;
      }
      if (el.classList.contains('equal')) {
        this.processExpression();
        return;
      }
      if (el.classList.contains('calc-key')) this.display.value += el.innerText;
    });
  }

  processExpression(): void {
    const expression = this.display.value;
    const operators = /[+\-*/]/g;
    const operations = expression.match(operators) as RegExpMatchArray;
    const numbers = expression.split(operators).map(Number);

    if (numbers.includes(NaN)) this.display.value = 'Expressão inválida';

    let result = numbers[0];

    for (let i = 0; i < operations.length; i++) {
      const currentNumber = numbers[i + 1];

      switch (operations[i]) {
        case '*':
          result = this.multiply(result, currentNumber);
          break;
        case '/':
          result = this.divide(result, currentNumber);
          break;
        case '-':
          result = this.sub(result, currentNumber);
          break;
        case '+':
          result = this.sum(result, currentNumber);
          break;
      }
    }

    this.showResult(result);
  }

  sum(...args: number[]): number {
    return args.reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  }

  sub(...args: number[]): number {
    return args.reduce((acc, value) => {
      acc -= value;
      return acc;
    }, 0);
  }

  multiply(...args: number[]): number {
    return args.reduce((acc, value) => {
      acc *= value;
      return acc;
    });
  }

  divide(...args: number[]): number {
    return args.reduce((acc, value) => {
      acc /= value;
      return acc;
    });
  }

  clearDisplay(): void {
    this.display.value = '';
  }

  showResult(result: number): void {
    this.clearDisplay();
    this.display.value = String(result);
  }
}
