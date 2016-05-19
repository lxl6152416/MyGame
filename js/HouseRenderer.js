/**
 * Created by Administrator on 2016/5/18.
 */
function MapRenderer(mapData, image, tileSize, viewportWidth, viewportHeight) {
    this._mapData = mapData;
    this._image = image;
    this._tileSize = tileSize;
    this._viewportWidth = viewportWidth;
    this._viewportHeight = viewportHeight;

    // Coordinates of the map
    this._x = 100;
    this._y = 100;
    this._tilesPerRow = image.width/tileSize;
}