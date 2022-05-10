const tileSetup = {
    width: 10,
    height: 10,
    "Y": () => [sprite("YOU") , opacity(0.5), pos(1,1), {name: "YOU", kind: "action"}, "YOU", "gameTile", "text", "action"],
    "A": () => [sprite("BAD") , opacity(0.5), pos(1,1), {name: "BAD", kind: "action"}, "BAD", "gameTile", "text", "action"],

    "B": () => [sprite("BABA"), opacity(0.5), pos(1,1), {name: "BABA", kind: "label"}, "gameTile", "text", "label"],
    "K": () => [sprite("KEKE"), opacity(0.5), pos(1,1), {name: "KEKE", kind: "label"}, "gameTile", "text", "label"],

    "b": () => [sprite("baba"), opacity(0.5), pos(1,1), {name: "baba"}, "gameTile", "obj"],
    "k": () => [sprite("keke"), opacity(0.5), pos(1,1), {name: "keke"}, "gameTile", "obj"],
};
export {tileSetup}