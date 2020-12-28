import * as THREE from 'three';

export default class Scene {
    static clock = new THREE.Clock();

    /**
     * Instance variables
     */
    canvas;
    options;
    scene;
    camera;
    renderer;
    sceneObjects;

    /**
     * Scene constructor. Select canvas and initialize scene.
     * @param {string} canvas Selector for canvas element. E.g., #can or .can
     * @param {object} [options] Options to define scene behavior in some ways
     */
    constructor(canvas, options = {}) {
        this.canvas = document.querySelector(canvas);
        this.options = options;
        this.init();
    }
    
    /**
     * Initialize a scene. Also acts as a "reset" operation.
     */
    init() {
        const { clientWidth, clientHeight } = this.canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.camera.position.z = 5;

        this.sceneObjects = [];
    }

    addObject(object) {
        this.sceneObjects.push(object)
        this.scene.add(object.mesh);
    }

    /**
     * Resize the Scene's canvas to the display size
     * @returns {boolean} If a resize operation was performed
     */
    resizeToDisplay() {
        const { 
            clientWidth, clientHeight, 
            width: cWidth, height: cHeight, 
        } = this.canvas;
        const dpr = window.devicePixelRatio;
        const width = clientWidth * dpr | 0;
        const height = clientHeight * dpr | 0;
        const needResize = cWidth !== width || cHeight !== height;

        if (needResize) {
            this.renderer.setSize(width, height, false);
        }

        return needResize;
    }

    /**
     * Kickoff and continue the Scene's animation
     */
    update() {
        const delta = Scene.clock.getDelta();

        if (this.resizeToDisplay()) {
            const { clientWidth, clientHeight } = this.canvas;
            this.camera.aspect = clientWidth / clientHeight;
            this.camera.updateProjectionMatrix();
        }

        this.sceneObjects.forEach(object => object.update(delta));
        this.renderer.render(this.scene, this.camera);
    }
}