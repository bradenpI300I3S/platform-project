// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile24 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile25 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile27 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile28 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400080001010101010101010103010101010101010101010101010101010101010201010101010101010101010101010101010101020101010101010101010101010101010101010104010101010101010101010101010101030101010101010101010101010101010101010102010101010101010101010101010101010101010201010101010101010101010101010101010101040101010101010101010101010101`, img`
. . . . . . . . . 2 . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,myTiles.tile25,myTiles.tile27,myTiles.tile28,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile22":
            case "tile24":return tile24;
            case "myTile23":
            case "tile25":return tile25;
            case "myTile25":
            case "tile27":return tile27;
            case "myTile26":
            case "tile28":return tile28;
            case "myTile0":
            case "tile1":return tile1;
            case "myTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
