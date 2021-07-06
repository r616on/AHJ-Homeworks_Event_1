import GameField from "./GameField/GameField";
import Goblin from "./Goblin/Goblin";
import GamePlay from "./GamePlay";

// const play = new GameField(".hole-game");
// play.generate(4);

const gamePlay = new GamePlay(GameField, Goblin);
gamePlay.init();
