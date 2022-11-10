import * as THREE from "three";

export const cubes = new THREE.Group();

const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 2, 2),
  new THREE.MeshBasicMaterial({ color: "red", wireframe: true })
);
box.position.set(0, 0.5, 0);
box.scale.set(2, 2);

cubes.add(box);
