import kaboom from "kaboom"
import {mapSize, tileSize} from "./config"
import {spireSheetSpec} from "./sprites"
import {tileSetup} from "./tiles"
import {GridLevel} from "./gridlevel"
import {findRules} from "./findRules"
import {LowerUIheight, LowerUI} from "./lowerUi"

kaboom({
  width: mapSize * (tileSize-1)+1,
  height: mapSize * (tileSize-1)+1 + LowerUIheight,
  background: [ 0, 0, 0 ],
  scale: 5,
  global: true
});

// initialize context
loadSpriteAtlas("sprites/baba_breach-export.png", spireSheetSpec);

// constants
layers(["ui_lowest", "ui_lower", "game", "ui"]);


let uiLevel = new GridLevel([
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
], {
    width: 10,
    height: 10,
    " ": () => [
      sprite("gridCell"),
      layer("ui_lowest"),
      color(30, 30, 30),
      fixed()
    ],
    "M": () => [
      sprite("gridCell"),
      layer("ui_lower"),
      color(50, 110, 50),
      fixed()
    ]
});


let tileLevel = new GridLevel([
  "        ",
  "  k  AK ",
  "        ",
  "   YB   ",
  "    b   ",
  "        ",
  "        ",
  "        ",
], tileSetup)


const rules = findRules(tileLevel);
console.log(rules);

lowerUI = new LowerUI(mapSize * (tileSize-1)+1, mapSize * (tileSize-1)+1);

/*
# TODO: Get a new, solid plan on how to apply rules.
- May be good to think of how the full game loop will work as part of this?
*/
