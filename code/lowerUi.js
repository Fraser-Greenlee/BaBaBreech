const LowerUIheight = 11;

class EndTurnButton {
  constructor(width, startY) {
    this.button = add([
      pos(width-28.5, startY+1.5),
      rect(27, 7),
      outline(1),
      color(50, 50, 110),
      area(),
      "endTurn"
    ])
    this.label = add([
      pos(width-27, startY+3),
      text("End Turn", {size: 5}),
      area(),
      "endTurn"
    ])
  }

  activate() {
    console.log(this.button);
    this.button.unuse("color");
    this.button.use(color(100, 100, 220));
    this.canceller = onClick("endTurn", () => {
      this.deactivate();
      this.canceller();
    });
  }

  deactivate() {
    this.button.unuse("color");
    this.button.use(color(50, 50, 110));
  }
}


class LowerUI {
  constructor(startY, width) {
    this.height = LowerUIheight;
    this.width = width;
 
    this.box = add([
      pos(0, startY),
      rect(this.width, this.height),
      color(50, 50, 110),
    ])

    this.title = add([
      pos(1, startY+3),
      text("YOUr Turn", {size: 5})
    ])

    this.endTurnButton = new EndTurnButton(this.width, startY);
    this.endTurnButton.activate();
  }
}

export {LowerUIheight, LowerUI}
