/**
 * Created by yooranchen on 3/11/16.
 */
var canvas;
var stage;
var img = new Image();
var sprite;

window.onload = function () {
    canvas = document.getElementById("canvas2");
    stage = new createjs.Stage(canvas);

    stage.addEventListener("stagemousemove", moveCanvas);
    stage.addEventListener("stagemousedown", clickCanvas);
    var data = {
        images: ["qq.png"],
        frames: {width: 21, height: 23, regX: 10, regY: 11}
    };

    sprite = new createjs.Sprite(new createjs.SpriteSheet(data));

    createjs.Ticker.setFPS(20);
    createjs.Ticker.addEventListener("tick", tick);

};
function tick(e) {
    var t = stage.getNumChildren();
    for (var i = t - 1; i > 0; i--) {
        var s = stage.getChildAt(i);
        s.vY += 2;
        s.vX += 1;
        s.x += s.vX;
        s.y += s.vY;

        s.scaleX = s.scaleY = s.scaleX + s.vS;
        s.alpha += s.vA;

        if (s.alpha <= 0 || s.y > canvas.height) {
            stage.removeChildAt(i);
        }
    }
    stage.update(e);
}
function clickCanvas(e) {
    var x = stage.mouseX;
    var y = stage.mouseY;
    addS(Math.random() * 200 +100, x, y, 2);
}

function moveCanvas(e) {
    var x = stage.mouseX;
    var y = stage.mouseY;
    addS(Math.random() * 2 + 1, x, y, 1);
}

function addS(count, x, y, speed) {
    for (var i = 0; i < count; i++) {
        var s = sprite.clone();
        s.x = x;
        s.y = y;
        //透明度
        s.alpha = Math.random() * 0.5 + 0.5;
        //缩放
        s.scaleX = s.scaleY = Math.random() + 0.3;

        //曲线
        var a = Math.PI * 2 * Math.random();
        var v = 30 * (Math.random() - 0.5) * speed;
        s.vX = Math.cos(a) * v;
        s.vY = Math.sin(a) * v;
        s.vS = 0.2 * (Math.random() - 0.5);//scale
        s.vA = -Math.random() * 0.05 - 0.01;//appha
        stage.addChild(s);
    }
}