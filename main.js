// Setup basic Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const light = new THREE.AmbientLight(0x404040); // Ambient light
scene.add(light);

// Load the GLB model
const loader = new THREE.GLTFLoader();
loader.load(
  'https://github.com/your-username/your-repo-name/raw/main/models/674bc4f18dc7c6e19d4004cc.glb', // Your hosted GLB file URL
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error('Error loading the model:', error);
  }
);

// Position the camera
camera.position.z = 5;

// Create animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
