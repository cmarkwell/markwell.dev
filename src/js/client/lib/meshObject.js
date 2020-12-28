import Animations from './animations';

export default class MeshObject {
    mesh;

    /**
     * Construct an object with a threejs primative Mesh.
     * @param {THREE.Mesh} mesh 
     * @param {object} options 
     */
    constructor(mesh, options = {}) {
        this.mesh = mesh;
        this.options = options;
    }

    /**
     * Run a frame of animation for the mesh object.
     * @param {number} delta Time elapsed since last update call
     */
    update(delta) {
        const { animation, speed = 1 } = this.options
        switch (animation) {
            case Animations.SPINX:
                this.mesh.rotation.x += delta * speed;
                break;
            case Animations.SPINY:
                this.mesh.rotation.y += delta * speed;
                break;
            case Animations.SPINZ:
                this.mesh.rotation.z += delta * speed;
                break;
            default:
                break;
        }
    }
}