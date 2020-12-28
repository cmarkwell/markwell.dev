import LandingScene from './landingScene';

let scene = new LandingScene('#renderCanvas');

function loop() {
    scene.update();
    requestAnimationFrame(loop);
}

loop();