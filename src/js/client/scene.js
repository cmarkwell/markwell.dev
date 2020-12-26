import * as THREE from 'three';

export default class Scene {
    canvas
    scene;
    camera;
    renderer;

    constructor(canvas) {
        this.canvas = document.querySelector(canvas);
        this.init();
    }
    
    init = () => {
        const { innerWidth, innerHeight } = this.canvas;

        // Set up scene, main camera, and renderer
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });

        // Window even listeners
        window.addEventListener('resize', this.onWindowResize, false);
    }

    onWindowResize = () => {
        const { innerWidth, innerHeight } = this.canvas;

        // Redraw canvas with updated aspect ratio and size
        this.camera.aspect = innerWidth / innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(innerWidth, innerHeight);
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    }
}