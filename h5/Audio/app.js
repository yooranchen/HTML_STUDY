/**
 * Created by yooranchen on 3/5/16.
 */
var box1Div, box1Di2, msgDiv, img1;

window.onload = function () {
    box1Div = document.getElementById("box1");
    box2Div = document.getElementById("box2");
    msgDiv = document.getElementById("msg");
    img1 = document.getElementById("img1");

    //box1Div.ondragenter = function (e) {
    //    showObj(e)
    //};

    img1.ondragstart = function (e) {
        e.dataTransfer.setData("imgId", "img1");
    }

    box1Div.ondragover = function (e) {
        e.preventDefault();//阻止系统默认的事件
    };
    box2Div.ondragover = function (e) {
        e.preventDefault();//阻止系统默认的事件
    };

    box1Div.ondrop = dropImgHandler;
    box2Div.ondrop = dropImgHandler;
};

function dropImgHandler(e) {
    e.preventDefault();
    var img = document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
};

function showObj(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br/>";
    }
    msgDiv.innerHTML = s;
}