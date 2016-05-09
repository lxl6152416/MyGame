/**
 * Created by Administrator on 2016/5/9.
 */
function Fighting(img){
    this._meIMG = img.get("me");
    this._enemyIMG = img.get("enemy");
    this._HP = img.get("HP");
    this._meX = 400;
    this._meY = 400;
    this._emX = 800;
    this._emY = 100;
}

_p = Fighting.prototype;

_p.draw = function(ctx){
    ctx.drawImage(this._meIMG,0,0,64,64,this._meX,this._meY,128,128);
    ctx.drawImage(this._enemyIMG,0,0,96,96,this._emX,this._emY,128,128);
    ctx.drawImage(this._HP,0,0,22,15,this._meX,this._meY - 30,22,15);
    ctx.drawImage(this._HP,0,0,22,15,this._emX,this._emY - 30,22,15);
};