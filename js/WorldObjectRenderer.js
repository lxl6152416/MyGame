/**
 * Created by Administrator on 2016/5/9.
 */
function WorldObjectRenderer(obj, viewWidth, viewHeight){
    this._obj = obj;
    this._viewportWidth = viewWidth;
    this._viewportHeight = viewHeight;
    this._x = 0;
    this._y = 0;
}

_p = WorldObjectRenderer.prototype;

