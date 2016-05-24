/**
 * Created by Administrator on 2016/5/9.
 */
function WorldObject(id,x,y){
    this._id = 0;
    this._x = 0;
    this._y = 0;
    this._w = 32;
    this._h = 32;
    this.setPosition(id,x,y);
   // this.show();
};

_p = WorldObject.prototype;

_p.getPosition = function(){
  return {
      id : this._id,
      x : this._x,
      y : this._y
  }
};

_p.setPosition = function(id, x , y){
    this._id = id;
    this._x = x;
    this._y = y;
};

/*_p.init = function () {
    for(var y = 0 ; y<this._mapData.length ; y++){
        for(var x = 0 ; x<this._mapData[y].length;x++){
            this._object.push({
               id : this._maxId,
                x : x * 32,
                y : y * 32
            });
            console.log(this._object[x].id);
        }
    }
}*/