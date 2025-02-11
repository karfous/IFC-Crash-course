import { Scene, BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera } from "three";

// 1 The scene
const scene = new Scene();

// 2 The Object
const geometry = new BoxGeometry(0.5, 0.5, 0.5);
const material = new MeshBasicMaterial({ color: "orange" });
const cubeMesh = new Mesh(geometry, material);
scene.add(cubeMesh);

// 3 The Camera
const sizes = {
    width: 800,
    height: 600,
};

const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

export { scene, camera };
