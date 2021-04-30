controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Start == true) {
        mySprite.vy = -63
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
    }
})
function Beginning_of_level () {
    Start = false
    mySprite.ay = 0
    mySprite.vy = 0
    mySprite.vx = 0
    info.startCountdown(1)
}
function Level2 () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 4))
    Beginning_of_level()
    tiles.setTilemap(tilemap`level3`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    Level2()
})
function Level1 () {
    tiles.setTilemap(tilemap`level1`)
    PlayerVelocity = 40
    info.startCountdown(1)
}
info.onCountdownEnd(function () {
    mySprite.ay = 175
    mySprite.vx = PlayerVelocity
    Start = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
	
})
let PlayerVelocity = 0
let projectile: Sprite = null
let mySprite: Sprite = null
let Start = false
Level1()
Start = false
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
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 4))
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.destroy(effects.disintegrate, 500)
    }
})
