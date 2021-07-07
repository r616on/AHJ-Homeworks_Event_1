import getRandom from "./libs/random";

export default class GamePlay {
  constructor(GameFild, Goblin) {
    this.gameFild = new GameFild();
    this.goblin = new Goblin();
    // this.holeField = document.querySelector(".hole-game");
    this.gameScore = document.querySelector(".score");
    this.gameFail = document.querySelector(".fail");
    this.hole = 0;
    this.userHit = 0;
    this.score = 0;
    this.item = 0;
    this.timer = 0;
  }

  init() {
    this.gameFild.generate(4);
    this.hole = document.querySelectorAll(".hole");
    this.eventClicK();
    this.stepRandom();

    // this.eventMouseover();
    // document.addEventListener("DOMContentLoaded", (e) => {
    //   alert("You ready??");

    // });
  }

  eventClicK() {
    this.gameFild.element.addEventListener("click", (e) => {
      if (e.target.classList.contains("goblin")) {
        this.userHit += 1;
        this.item.remove();
        clearTimeout(this.timer);
        this.stepRandom();
      }
    });
  }

  createItem() {
    const item = document.createElement("img");
    item.src = this.goblin.goblinSrc;
    item.classList.add("goblin");
    item.classList.add("blow");
    // item.addEventListener("click", () => {
    //   this.item.remove();
    //   this.stepRandom();
    //   this.userHit += 1;
    // });
    this.item = item;
  }

  stepRandom() {
    const index = getRandom(0, this.hole.length - 1);
    this.createItem();
    this.hole[index].append(this.item);
    this.timer = setTimeout(() => {
      this.item.remove();
      this.stepRandom();
    }, 1000);
    this.score += 1;
    if (this.score - this.userHit > 5) {
      alert("you lose");
      this.score = 0;
      this.userHit = 0;
    }
    this.gameScore.innerText = `Score ${this.userHit}`;
    this.gameFail.innerText = `Fail ${this.score - this.userHit}`;
  }
}
