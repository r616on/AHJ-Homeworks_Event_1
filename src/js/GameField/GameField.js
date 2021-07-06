export default class GameField {
  constructor() {
    this.element = document.querySelector(".hole-game");
  }

  generate(num) {
    for (let i = 0; i < num * num; i += 1) {
      const item = document.createElement("div");
      item.classList.add("hole");
      this.element.append(item);
    }
  }
}
