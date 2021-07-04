import goblinNmg from './img/goblin.png';
import getRandom from '../libs/random';

export default class Goblin {
  constructor(element) {
    if (typeof element === 'string') {
      this.element = document.querySelector(element);
    }
    this.hole = this.element.querySelectorAll('.hole');
  }

  randomHole() {
    const item = document.createElement('img');
    item.src = goblinNmg;
    item.classList.add('goblin');
    // this.hole[4].append(item);
    let index = -1;
    const interval = setInterval(() => {
      index = getRandom(0, this.hole.length - 1);
      this.hole[index].append(item);
    }, 700);
    setTimeout(() => {
      clearTimeout(interval);
    }, 17000);
  }
}
