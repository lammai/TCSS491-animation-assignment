class Zero {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(
      ASSET_MANAGER.getAsset('./zero-combo-sheet.png'),
      0,
      0,
      230,
      237,
      54,
      0.05
    );
  }

  update() {}

  draw(ctx) {
    // ctx.drawImage(ASSET_MANAGER.getAsset('./zero-combo-sheet.png'), 0, 536);
    this.animator.drawFrame(this.game.clockTick, ctx, 0, 77, 3);
  }
}
