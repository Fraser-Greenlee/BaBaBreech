const nameOffset = 9 * 6;
const tileOffset = 9 * 7;
const gridOffset = 9 * 8;

const spireSheetSpec = {
  "YOU": {
      x: 0,
      y: 0,
      width: 9,
      height: 9,
  },
  "BAD": {
      x: 0,
      y: 9,
      width: 9,
      height: 9,
  },
  "THRO": {
      x: 9,
      y: 0,
      width: 9,
      height: 9,
  },
  "SHOT": {
      x: 9,
      y: 9,
      width: 9,
      height: 9,
  },
  "HOP": {
      x: 9,
      y: 18,
      width: 9,
      height: 9,
  },
  "CHRG": {
      x: 9,
      y: 27,
      width: 9,
      height: 9,
  },
  "MIRR": {
      x: 9,
      y: 36,
      width: 9,
      height: 9,
  },
  "PLUS": {
      x: 18,
      y: 0,
      width: 9,
      height: 9,
  },
  "LR": {
      x: 18,
      y: 9,
      width: 9,
      height: 9,
  },
  "SIDE": {
      x: 18,
      y: 18,
      width: 9,
      height: 9,
  },
  "PULL": {
      x: 27,
      y: 0,
      width: 9,
      height: 9,
  },
  "HOOK": {
      x: 27,
      y: 9,
      width: 9,
      height: 9,
  },
  "SWAP": {
      x: 27,
      y: 18,
      width: 9,
      height: 9,
  },
  "BIND": {
      x: 27,
      y: 27,
      width: 9,
      height: 9,
  },
  "TURN": {
      x: 27,
      y: 36,
      width: 9,
      height: 9,
  },
  "FLY": {
      x: 36,
      y: 0,
      width: 9,
      height: 9,
  },
  "STOP": {
      x: 36,
      y: 9,
      width: 9,
      height: 9,
  },

  "BABA": {
      x: nameOffset + 0,
      y: 0,
      width: 9,
      height: 9,
  },
  "KEKE": {
      x: nameOffset + 0,
      y: 9,
      width: 9,
      height: 9,
  },
  "ROCK": {
      x: nameOffset + 0,
      y: 18,
      width: 9,
      height: 9,
  },
  "HART": {
      x: nameOffset + 0,
      y: 27,
      width: 9,
      height: 9,
  },
  "STAR": {
      x: nameOffset + 0,
      y: 36,
      width: 9,
      height: 9,
  },
  "WATR": {
      x: nameOffset + 0,
      y: 45,
      width: 9,
      height: 9,
  },
  "DUST": {
      x: nameOffset + 0,
      y: 54,
      width: 9,
      height: 9,
  },
  "POT": {
      x: nameOffset + 0,
      y: 63,
      width: 9,
      height: 9,
  },
  "TILE": {
      x: nameOffset + 0,
      y: 72,
      width: 9,
      height: 9,
  },
  "WALL": {
      x: nameOffset + 0,
      y: 81,
      width: 9,
      height: 9,
  },

  "baba": {
      x: tileOffset + 0,
      y: 0,
      width: 9,
      height: 9,
  },
  "keke": {
      x: tileOffset + 0,
      y: 9,
      width: 9,
      height: 10,
  },
  "rock": {
      x: tileOffset + 0,
      y: 18,
      width: 9,
      height: 9,
  },
  "hart": {
      x: tileOffset + 0,
      y: 27,
      width: 9,
      height: 9,
  },
  "star": {
      x: tileOffset + 0,
      y: 36,
      width: 9,
      height: 9,
  },
  "watr": {
      x: tileOffset + 0,
      y: 45,
      width: 9,
      height: 9,
  },
  "dust": {
      x: tileOffset + 0,
      y: 54,
      width: 9,
      height: 9,
  },
  "pot": {
      x: tileOffset + 0,
      y: 63,
      width: 9,
      height: 9,
  },
  "tile": {
      x: tileOffset + 0,
      y: 72,
      width: 9,
      height: 9,
  },
  "wall": {
      x: tileOffset + 0,
      y: 81,
      width: 9,
      height: 9,
  },

  "gridCell": {
      x: gridOffset + 0,
      y: 0,
      width: 11,
      height: 11,
  }
};

export {spireSheetSpec}