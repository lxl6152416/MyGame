function MapRenderer(mapData, image, tileSize, viewportWidth, viewportHeight) {
    this._mapData = mapData;
    this._image = image;
    this._tileSize = tileSize;

    // Coordinates of the map
    this._x = 0;
    this._y = 0;
    // The number of tiles in one row of the image
    this._tilesPerRow = image.width/tileSize;

    //屏幕外缓冲画布
    this._offCanvas = document.createElement("canvas");
    this._offContext = this._offCanvas.getContext('2d');
    this._offDirty = true;
    this.setViewportSize(viewportWidth , viewportHeight);
}

_p = MapRenderer.prototype;

_p.draw = function (ctx) {
    if(this._offDirty){
        this._redrawOffscreen();
    }
    ctx.drawImage(this._offCanvas,0,0);
}
/* Draws the whole map */
_p._redrawOffscreen = function() {

    var ctx = this._offContext;
    ctx.clearRect(0, 0, this._viewportWidth, this._viewportHeight);
    //上下左右可见瓦片的坐标.
    var startX = Math.floor(-this._x / this._tileSize);
    startX = Math.max(startX, 0);
    var endX = Math.floor((this._viewportWidth - this._x)/this._tileSize);
    console.log(this._mapData[0].length - 1+","+endX);
    endX = Math.min(endX, this._mapData[0].length - 1);


    var startY = Math.floor(-this._y / this._tileSize);
    startY = Math.max(startY , 0);
    var endY = Math.floor((this._viewportHeight - this._y) / this._tileSize);
    endY = Math.min(endY, this._mapData.length - 1);

    for (var cellY = startY; cellY <= endY; cellY++) {
        for (var cellX = startX; cellX <= endX; cellX++) {
            var tileId = this._mapData[cellY][cellX];
            this._drawTileAt(ctx, tileId, cellX, cellY);
        }
    }

    this._offDirty = false;
};

/* Draws a single tile */
_p._drawTileAt = function(ctx, tileId, cellX, cellY) {

    // Position of the tile inside of a tile sheet
    var srcX = (tileId%this._tilesPerRow)*this._tileSize;
    var srcY = Math.floor(tileId/this._tilesPerRow)*this._tileSize;

    // size of the tile
    var size = this._tileSize;

    // position of the tile on the screen
    var destX = this._x + cellX*size;
    var destY = this._y + cellY*size;

    ctx.drawImage(this._image, srcX, srcY, size, size, destX, destY, size, size);
};

_p.move = function(deltaX, deltaY) {
    Drawable.prototype.move.call(this, deltaX, deltaY);
    this._offDirty = true;
};

_p.setViewportSize = function(Width, height){
    this._viewportWidth = Width;
    this._viewportHeight = height;
    this._resetOffScreenCanvas();
};

_p._resetOffScreenCanvas = function(){
    this._offCanvas.width = this._viewportWidth;
    this._offCanvas.heigh = this._viewportHeight;
    this,_offDirty = true;
};

