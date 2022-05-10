import {Rule} from "./rule"

function isTile(tile, tag) {
  if (tile == null) {
    return false;
  }
  return tile.is(tag);
}

function isValidRule(t1, t2) {
  if (!isTile(t1, "text")) {
    return false;
  }
  if (!isTile(t2, "text")) {
    return false;
  }
  return (
    (isTile(t1, "label")  && isTile(t2, "action"))
    ||
    (isTile(t1, "action") && isTile(t2, "label"))
  );
}

function orderRuleTiles(t1, t2) {
  if (t1.kind === "label") {
    return {label: t1, action: t2}
  }
  return {label: t2, action: t1}
}

function findRules(tileLevel) {
  let rules = new Array();
  for (const tile of tileLevel.getTiles()) {
    if (!isTile(tile, "text")) {continue;}
  
    const right = tileLevel.get(new Vec2(tile.gridPos.x+1, tile.gridPos.y));
    if (isValidRule(tile, right)) {
      tile.unuse("opacity");
      right.unuse("opacity");
      const {label, action} = orderRuleTiles(tile, right);
      rules.push(new Rule(label, action));
    }

    const down  = tileLevel.get(new Vec2(tile.gridPos.x,   tile.gridPos.y+1));
    if (isValidRule(tile, down)) {
      tile.unuse("opacity");
      down.unuse("opacity");
      const {label, action} = orderRuleTiles(tile, down);
      rules.push(new Rule(label, action));
    }
  }
  return rules;
}

export {findRules}
