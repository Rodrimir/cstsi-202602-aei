import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import arquivoCarro from "../../img/models/carro/source/Sketchfab_2026_11_04_10_34_31.glb?url";

const canvas = document.querySelector("#cena");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const cena = new THREE.Scene();
cena.background = new THREE.Color(0x1a1a1a);

cena.add(new THREE.GridHelper(20, 20, 0x666666, 0x333333));
cena.add(new THREE.AxesHelper(5));

const sol = new THREE.DirectionalLight(0xffffff, 2);
sol.position.set(40, 80, 40);
cena.add(sol);
cena.add(new THREE.AmbientLight(0xffffff, 1.5));

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(6, 2.5, 6);

const controles = new OrbitControls(camera, canvas);
controles.target.set(0, 0.5, 0);
controles.autoRotate = false;
controles.enableDamping = true;

let carro;
new GLTFLoader().load(arquivoCarro, (gltf) => {
  carro = gltf.scene;
  cena.add(carro);
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

canvas.addEventListener("click", (evento) => {
  if (!carro) return;

  mouse.x = (evento.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(evento.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const alvos = raycaster.intersectObject(carro, true);
  if (alvos.length === 0) return;

  const ponto = carro.worldToLocal(alvos[0].point.clone());
  carro.position.z += ponto.z > 0 ? 0.5 : -0.5;
});

renderer.setAnimationLoop(() => {
  controles.update();
  renderer.render(cena, camera);
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
