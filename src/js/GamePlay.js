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
  }

  init() {
    this.gameFild.generate(4);
    this.hole = document.querySelectorAll(".hole");
    // this.eventClicK();
    this.randomHole();
    // this.eventMouseover();
    // document.addEventListener("DOMContentLoaded", (e) => {
    //   alert("You ready??");

    // });
  }

  // eventClicK() {
  //   this.gameFild.element.addEventListener("click", (e) => {
  //     if (e.target.classList.contains("goblin")) {
  //       this.userHit += 1;
  //     }
  //   });
  // }
  // eventMouseover() {
  //   this.gameFild.element.addEventListener("mouseover", (e) => {
  //     if (e.target.classList.contains("goblin")) {
  //       console.log("111");
  //       e.target.classList.add("blow");
  //     }
  //   });
  // }
  randomHole() {
    const item = document.createElement("img");
    item.src = this.goblin.goblinSrc;
    item.classList.add("goblin");
    item.classList.add("blow");
    item.addEventListener("click", () => {
      this.userHit += 1;
    });
    let index = -1;
    const interval = setInterval(() => {
      index = getRandom(0, this.hole.length - 1);
      this.hole[index].append(item);
      this.score += 1;
      if (this.score - this.userHit > 5) {
        clearTimeout(interval);
        alert("you lose");
      }

      this.gameScore.innerText = `Score ${this.userHit}`;
      this.gameFail.innerText = `Fail ${this.score - this.userHit}`;
    }, 1000);
  }
}

//  const stop = () => (playing = true),
//    getHole = (index) => document.getElementById(`hole${index}`),
//    deactivateHole = (index) => (getHole(index).className = "hole"),
//    activateHole = (index) => (getHole(index).className = "hole hole_has-mole"),
//    next = () =>
//      setTimeout(() => {
//        if (!playing) {
//          return;
//        }
//        deactivateHole(activeHole);
//        activeHole = Math.floor(1 + Math.random() * 9);
//        activateHole(activeHole);
//        next();
//      }, 800);

//  next();
