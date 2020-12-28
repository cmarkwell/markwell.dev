// NPM
import * as THREE from 'three';

// Resources
import fontData from '../../json/Cascadia_Code_Regular.json';

// Library
import Scene from './lib/scene';
import MeshObject from './lib/meshObject';
import Animations from './lib/animations';

export default class LandingScene extends Scene {
    constructor(canvas) {
        super(canvas);
    }

    init() {
        super.init();
        this.camera.position.z = 20;

        // Load JSON data for font
        const loader = new THREE.FontLoader();
        const font = loader.parse(fontData);

        // Create text geometry and material
        const geometry = new THREE.TextGeometry('Hi!', { font: font, size: 5, height: 1 });
        geometry.center();
        const material = new THREE.MeshPhongMaterial({ color: 0x00DEAD });
        const text = new THREE.Mesh(geometry, material);

        // Add text to scene objects
        const mo = new MeshObject(text, { animation: Animations.SPINY, speed: 0.25 });
        this.addSceneObject(mo);

        // Add PointLight to scene
        const light = new THREE.PointLight(0xFFFFFF, 1, 100);
        light.position.set(10, 10, 10);
        this.scene.add(light);
    }
}