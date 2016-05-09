/**
 * Created by Administrator on 2016/5/9.
 */
function SpriteSheet(image, frames) {
    this._image = image;
    this._frames = frames;
}

_p = SpriteSheet.prototype;

SpriteSheet.FRAME_X = 0;
SpriteSheet.FRAME_Y = 1;
SpriteSheet.FRAME_WIDTH = 2;
SpriteSheet.FRAME_HEIGHT = 3;
SpriteSheet.FRAME_ANCHOR_X = 4;
SpriteSheet.FRAME_ANCHOR_Y = 5;

_p.drawFrame = function(ctx, index, currentFrame, x, y) {
    var frame = this._frames[index];
    if (!frame)
        return;

        ctx.drawImage(this._image, frame[currentFrame][SpriteSheet.FRAME_X], frame[currentFrame][SpriteSheet.FRAME_Y],
            frame[currentFrame][SpriteSheet.FRAME_WIDTH], frame[currentFrame][SpriteSheet.FRAME_HEIGHT],
            x - frame[currentFrame][SpriteSheet.FRAME_ANCHOR_X], y - frame[currentFrame][SpriteSheet.FRAME_ANCHOR_Y],
            frame[currentFrame][SpriteSheet.FRAME_WIDTH], frame[currentFrame][SpriteSheet.FRAME_HEIGHT]);
};
