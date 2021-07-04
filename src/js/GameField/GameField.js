export default class GameField {
  constructor(element) {
    if (typeof element === 'string') {
      this.element = document.querySelector(element);
    }
  }

  generate(num) {
    for (let i = 0; i < num * num; i += 1) {
      const item = document.createElement('div');
      item.classList.add('hole');
      this.element.append(item);
    }
  }
}
