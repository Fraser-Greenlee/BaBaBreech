/*
# TODO
Need a rethink on how the game is loaded and rendered.

Currently we have `addLevel`.
This scans a list of characters to load game objects
in given positions.

The resulting level doesn't then let us find a game object in a given position.
Nor does it let us update the map dirrectly.
(It allows spawning a new tile at a given position but nothing more)

# New setup

Define a new level class that holds the string and a grid-array of game objects.
Will allow getting an object at a given position and moving it to a new cell.
*/

function arrayFromTextMap(textMap) {
  let gameObjMap = [];
  for (const row of textMap) {
    let gameObjRow = [];
    for (const _char of row) {
      gameObjRow.push(undefined);
    }
    gameObjMap.push(gameObjRow);
  }
  return gameObjMap;
}


class GridLevel {
  constructor(textMap, tileSetup) {
    this.textMap = textMap;
    this.tileSetup = tileSetup;
    this.level = addLevel(textMap, tileSetup);
    this.gameObjMap = this.makeGameObjMap();
  }

  makeGameObjMap() {
    let gameObjMap = arrayFromTextMap(this.textMap);
    for (const gameObj of get("gameTile")) {
      gameObjMap[gameObj.gridPos.y][gameObj.gridPos.x] = gameObj;
    }
    return gameObjMap;
  }

  posToGridPos(p) {
    let start = this.level.offset();
    let x = (p.x - start.x) / this.level.gridWidth();
    let y = (p.y - start.y) / this.level.gridHeight();
    return {x, y};
  }

  gridPosToPos(p) {
    return this.level.getPos(p);
  }

  get(p) {
    if (p.y < 0 || p.y >= this.gameObjMap.length) {
      return undefined;
    }
    if (p.x < 0 || p.x >= this.gameObjMap[0].length) {
      return undefined;
    }
    return this.gameObjMap[p.y][p.x];
  }

  getTiles() {
    return this.gameObjMap.flat();
  }

  move(start, end) {
    let obj = this.get( Vec2(start.x, start.y) );
    obj.pos = this.gridPosToPos(end);
  }
}

export {GridLevel}