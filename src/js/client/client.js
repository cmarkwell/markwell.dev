import Scene from './scene';

let scene = new Scene('#renderCanvas');
scene.init();

function loop() {
    scene.update();
    requestAnimationFrame(loop);
}

loop();