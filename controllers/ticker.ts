export function ticker() {
  before.save()
  input.update()
  move.input(User().data.hero)

  pixi.sprites.hero["idle"].visible = true
  l.keys(pixi.sprites.mapChunks).forEach((map) => pixi.moveMap(map))

  observer.update()
  if (observer.mapChunkChanged) pixi.loadCloseMapChunks()

  pixi.tick++
}
