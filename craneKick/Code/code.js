let canvasRoom = document.getElementById("canvasRoom");
let ctxRoom = canvasRoom.getContext("2d");

let roomWidth = 1024;
let roomHeight = 768;

ctxRoom.fillStyle("blue");
ctxRoom.fillRect(0, 0, roomWidth, roomHeight);