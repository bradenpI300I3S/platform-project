controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -90
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . 2 f 2 . . . . . . . . . . . . 
        . 2 2 2 . . . . . . . . . . . . 
        . 4 2 4 . . . . . . . . . . . . 
        . 4 4 4 . . . . . . . . . . . . 
        . 5 4 5 . . . . . . . . . . . . 
        . . 5 . . . . . . . . . . . . . 
        `, mySprite, 0, 80)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
tiles.setWallAt(tiles.getTileLocation(1, 6), false)
mySprite = sprites.create(img`
    . . . . . . . f f f f f f . . . 
    . . . . . f f e e e e f f f . . 
    . . . . f f e e e e f f f f f . 
    . . . . f e e e f f e e e e f . 
    . f . f f f f f e e f f f f e f 
    f 1 f 1 4 f f f f f f f f e f f 
    f 1 f 2 1 f f f f f e e e f f f 
    f 1 f 2 4 f e e e b f d d e e f 
    f 1 f 1 4 f e d e 1 f d d e f . 
    f 1 f 2 f 2 2 2 e d d d d f . . 
    . f f f . f f 2 2 d d d e f . . 
    . . f . . . 4 d d 2 4 4 4 f . . 
    . . . . . . 2 2 d 2 4 4 4 f . . 
    . . . . . . f 4 4 f d 4 4 f . . 
    . . . . . . . f f f f f f . . . 
    . . . . . . . . f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.isHittingTile(CollisionDirection.Top)) {
        mySprite.destroy(effects.disintegrate, 500)
    }
})
forever(function () {
    mySprite.ay = 250
})
