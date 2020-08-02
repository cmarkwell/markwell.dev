import * as THREE from 'three';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

const canvas = document.getElementById('renderCanvas');
let renderer = new THREE.WebGLRenderer({ canvas: canvas });
onWindowResize();

// Torus Knot 
let geometry2 = new THREE.TorusKnotGeometry(10, 3, 480, 48);
let material2 = new THREE.MeshPhongMaterial({ color: 0xffffff });
let torusKnot = new THREE.Mesh(geometry2, material2);
scene.add(torusKnot);

// Red light
let light = new THREE.DirectionalLight(0xff0000, 1, 0.001);
light.position.set(-32, 0, 32);
light.target = torusKnot;
scene.add(light);

camera.position.set(0, 0, 33);

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.y += 0.001;
    renderer.render(scene, camera);
}

animate();