/**
 * Created by Administrator on 2016/5/10.
 */
var KeyDown = function(){
    var keyCode = event.keyCode;
    if (isMoving) {
        event = event || window.event;

        if (keyCode == 38) {
            if (canMove(0, -speed))
                mapRenderer.move(moveX, speed);
            frame = 3;
        } else if (keyCode == 40) {
            if (canMove(0, speed))
                mapRenderer.move(moveX, -speed);
            frame = 0;
        } else if (keyCode == 37) {
            if (canMove(-speed, 0))
                mapRenderer.move(speed, moveY);
            frame = 1;
        } else if (keyCode == 39) {
            if (canMove(speed, 0))
                mapRenderer.move(-speed, moveY);
            frame = 2;
        }
        ;
    }
    else {
        if (keyCode == 32) {
            isMoving = !isMoving;
        }
    }
};