import * as THREE from 'three';

import Scene from './lib/scene';
import MeshObject from './lib/meshObject';
import Animations from './lib/animations';

export default class LandingScene extends Scene {
    constructor(canvas) {
        super(canvas);
    }

    init() {
        super.init();

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00DEAD });
        const cube = new THREE.Mesh(geometry, material);
        const mo = new MeshObject(cube, { animation: Animations.SPINY });
        this.addObject(mo);
    }
}