/**
 * Created by Administrator on 2016/5/15.
 */
function BagRender(data){
    this._data = data;

    // init Bag point.
    this._x = window.screen.width / 2 + 150;
    this._y = window.screen.height/ 2 - 200;
    this._width = 150;
    this._height = 200;

}

_p = BagRender.prototype;

_p.draw = function (ctx) {
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.strokeRect(this._x,this._y,this._width,this._height);
}