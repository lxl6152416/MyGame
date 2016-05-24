/**
 * Created by Administrator on 2016/5/9.
 */
function Fighting(img){
    this._w = 1366;
    this._h = 768;
    this._meX = this._w/8;
    this._meY = this._h/2;
    this._emX = this._w *5/8;
    this._emY = 200 ;

    this._state1 = img.get("select1");
    this._state2 = img.get("select2");
    this._state3 = img.get("select3");
    this._state4 = img.get("select4");

    this._meIMG = img.get("me");
    this._enemyIMG = img.get("enemy");
    this._HP = img.get("HP");
    this._meHP = 100;
    this._emHP = 100;
    this._newMeHP = this._meHP;
    this._newEmHP = this._emHP;
    this._state = 1;
}

_p = Fighting.prototype;

_p.draw = function(ctx){
    this._drawMe(ctx);
    this._drawEm(ctx);
    this._drawFight(ctx);
};

_p._drawMe = function (ctx) {
    ctx.drawImage(this._meIMG,0,0,64,64,this._meX,this._meY,128,128);
    ctx.drawImage(this._HP,0,0,22,15,this._meX,this._meY-10,22,15);
    ctx.fillStyle = "green";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeRect(this._meX + 30, this._meY-8 , 105 , 11);
    ctx.fillRect(this._meX + 31, this._meY -7, 100 * (this._newMeHP / this._meHP) , 7);

    ctx.font = "normal bold 23px Arial,宋体";
    ctx.fillStyle = "black";
    ctx.shadowColor = "#707070";
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.fillText("Lv. 5" ,this._meX +20 ,this._meY +30, 30);
    ctx.fillText(this._newMeHP +" / "+ this._meHP , this._meX +70 , this._meY+30  , 50);
};
_p._drawEm = function (ctx) {
        ctx.drawImage(this._enemyIMG,0,0,96,96,this._emX,this._emY,128,128);
        ctx.drawImage(this._HP,0,0,22,15,this._emX,this._emY - 10,22,15);
        ctx.fillText("小火龙" ,this._emX  ,this._emY -30, 100);
        ctx.fillStyle = "green";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.strokeRect(this._emX + 30, this._emY-8 , 105 , 11);
        ctx.fillRect(this._emX + 31, this._emY -7, 100 * (this._newEmHP / this._emHP) , 7);

        ctx.font = "normal bold 23px Arial,宋体";
        ctx.fillStyle = "black";
        ctx.shadowColor = "#707070";
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.fillText("Lv. 5" ,this._emX +20 ,this._emY +30, 30);
        ctx.fillText(this._newEmHP +" / "+ this._emHP , this._emX +70 , this._emY+30  , 50);
};
_p._drawFight =function (ctx){
    ctx.drawImage(this._whichState(), 0, 0, 620, 184,this._meX + 128,this._meY + 128,620,184);
};
_p.drawInfo = function(ctx , info){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.strokeRect(this._meX + 128,this._meY + 128,620,184);
    ctx.fillRect(this._meX + 128,this._meY + 128,620,184);

    ctx.fillStyle = "white";
    ctx.fillText(info , this._meX + 130,this._meY + 150,620,184);

    ctx.fillText("按空格键继续..." , this._meX + 550,this._meY + 300,620,184);
};
_p.resetView = function(x ,y){
    this._w = x;
    this._h = y;
    this._meX = x/8;
    this._meY = y/2;
    this._emX = x*5/8;
    this._emY = 100 ;
};
_p.setState = function(state){
    this._state = state;
};
_p.getState = function (){
    return this._state;
}
_p._whichState = function () {
    switch (this._state){
        default: case 1 : return this._state1;break;
        case 2 : return this._state2;break;
        case 3 : return this._state3;break;
        case 4 : return this._state4;break;
    }
}
_p._setMeHP = function(x){
    this._meHP = x;
};

_p._setEmHP = function(y){
    this._emHP = y;
};

_p._reduceHP = function(who , dHP){
    if(who == 1){
        if((this._newMeHP - dHP)< 0 ) this._newMeHP = 0;
        else this._newMeHP -= dHP ;
    }
    else if(who == 2){
        if((this._newEmHP - dHP) < 0 ) this._newEmHP = 0;
        else this._newEmHP -= dHP ;
    }
};

_p._getHP = function(){
    if(this._newMeHP == 0 || this._newEmHP == 0)
        return true;
    return false;
}